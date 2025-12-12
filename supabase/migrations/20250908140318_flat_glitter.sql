/*
  # Initial JobinSuisse Database Schema

  1. New Tables
    - `users`
      - `id` (uuid, primary key, references auth.users)
      - `email` (text, unique)
      - `role` (enum: client, admin)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `pack_requests`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `pack_type` (enum: starter, emploi, emploi_logement)
      - `status` (enum: pending, documents_requested, documents_received, quote_preparation, quote_sent, quote_accepted, completed, cancelled)
      - `stripe_payment_intent_id` (text, nullable)
      - `amount_paid` (numeric)
      - `is_deposit` (boolean, default false)
      - `documents` (jsonb, for storing file paths and metadata)
      - `notes` (text, nullable)
      - `city` (text, nullable, for pack 3)
      - `budget` (numeric, nullable, for pack 3)
      - `furnished` (boolean, nullable, for pack 3)
      - `duration_months` (integer, nullable, for pack 3)
      - `is_eu_citizen` (boolean, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `audit_logs`
      - `id` (uuid, primary key)
      - `user_id` (uuid, nullable, foreign key to users)
      - `action` (text)
      - `resource_type` (text)
      - `resource_id` (text, nullable)
      - `details` (jsonb)
      - `ip_address` (text, nullable)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
    - Add policies for admin users to access all data

  3. Storage Buckets
    - `public-ebook` for ebook files
    - `private-docs` for user documents
*/

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create custom types
DO $$ BEGIN
  CREATE TYPE user_role AS ENUM ('client', 'admin');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE pack_type AS ENUM ('starter', 'emploi', 'emploi_logement');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
  CREATE TYPE request_status AS ENUM (
    'pending',
    'documents_requested', 
    'documents_received',
    'quote_preparation',
    'quote_sent',
    'quote_accepted',
    'completed',
    'cancelled'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text UNIQUE NOT NULL,
  role user_role DEFAULT 'client',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create pack_requests table
CREATE TABLE IF NOT EXISTS pack_requests (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  pack_type pack_type NOT NULL,
  status request_status DEFAULT 'pending',
  stripe_payment_intent_id text,
  amount_paid numeric NOT NULL DEFAULT 0,
  is_deposit boolean DEFAULT false,
  documents jsonb DEFAULT '{}',
  notes text,
  city text,
  budget numeric,
  furnished boolean,
  duration_months integer,
  is_eu_citizen boolean,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create audit_logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  action text NOT NULL,
  resource_type text NOT NULL,
  resource_id text,
  details jsonb DEFAULT '{}',
  ip_address text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE pack_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Admins can read all users"
  ON users
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Pack requests policies
CREATE POLICY "Users can read own pack requests"
  ON pack_requests
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create own pack requests"
  ON pack_requests
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own pack requests"
  ON pack_requests
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Admins can read all pack requests"
  ON pack_requests
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Audit logs policies
CREATE POLICY "Admins can read all audit logs"
  ON audit_logs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "System can insert audit logs"
  ON audit_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_pack_requests_updated_at BEFORE UPDATE ON pack_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('public-ebook', 'public-ebook', true),
  ('private-docs', 'private-docs', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for public-ebook bucket
CREATE POLICY "Public ebook access"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'public-ebook');

-- Storage policies for private-docs bucket
CREATE POLICY "Users can upload their own documents"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'private-docs' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Users can read their own documents"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'private-docs' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "Admins can read all documents"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'private-docs' AND
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Function to create admin user
CREATE OR REPLACE FUNCTION create_admin_user(admin_email text)
RETURNS void AS $$
BEGIN
  INSERT INTO users (id, email, role)
  SELECT id, email, 'admin'
  FROM auth.users
  WHERE email = admin_email
  ON CONFLICT (id) DO UPDATE SET role = 'admin';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_pack_requests_user_id ON pack_requests(user_id);
CREATE INDEX IF NOT EXISTS idx_pack_requests_status ON pack_requests(status);
CREATE INDEX IF NOT EXISTS idx_pack_requests_created_at ON pack_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at);
export const stripeProducts = [
  {
    id: 'prod_T19hxNQdaNGlA6',
    priceId: 'price_1S57OHFpdr97KFgBaYY1S8ZR',
    name: 'Pack Emploi',
    description: 'Accompagnement complet pour décrocher votre emploi en Suisse',
    mode: 'payment' as const,
  },
  {
    id: 'prod_T19gaZqNrZfeL8',
    priceId: 'price_1S57NBFpdr97KFgBb7j5rSPX',
    name: 'Pack Emploi + Logement',
    description: 'Solution complète emploi et logement pour votre installation en Suisse',
    mode: 'payment' as const,
  },
  {
    id: 'prod_T19aDtKH6Hl9lu',
    priceId: 'price_1S57HHFpdr97KFgBVXxfzfbC',
    name: 'Starter Pack',
    description: 'Parfait pour débuter vos démarches en Suisse',
    mode: 'payment' as const,
  },
] as const;

export type StripeProduct = typeof stripeProducts[number];

export function getProductByPriceId(priceId: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.priceId === priceId);
}

export function getProductById(id: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.id === id);
}
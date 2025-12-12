# JobinSuisse

## Lancer le projet en local

1. **Installer les dépendances**
   ```bash
   npm install
   ```
2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```
   L'application Next.js est alors accessible sur http://localhost:3000.
3. **Scripts utiles**
   - Build de production : `npm run build`
   - Lancer le build : `npm start`
   - Lint : `npm run lint`
   - Vérification de typage : `npm run type-check`

## Lancer depuis GitHub sans rien installer

- **GitHub Codespaces** : ouvrez ce dépôt dans Codespaces pour disposer d'un environnement prêt à l'emploi dans le navigateur. Une fois le conteneur démarré, exécutez `npm install`, puis `npm run dev` pour prévisualiser le site sans rien installer sur votre machine.
- **Aperçu en ligne (Vercel/CI)** : importez le dépôt dans Vercel (bouton « Import Git Repository ») ou configurez un pipeline CI/CD. Fournissez toutes les variables d'environnement (Supabase, Stripe, etc.) dans les paramètres du projet afin que les pages et API routes fonctionnent correctement.

## Pousser vos changements sur GitHub

1. Vérifiez que vous êtes bien sur la branche voulue (par défaut `work`) ou créez-en une nouvelle :
   ```bash
   git checkout -b ma-branche
   ```
2. Ajoutez les fichiers modifiés et validez :
   ```bash
   git add .
   git commit -m "Mise à jour de la documentation"
   ```
3. Liez votre dépôt GitHub (si ce n'est pas déjà fait) et poussez :
   ```bash
   git remote add origin https://github.com/<votre-compte>/<votre-depot>.git  # si besoin
   git push origin ma-branche
   ```
   Vous pourrez ensuite ouvrir une Pull Request depuis GitHub.

## Dépannage Windows PowerShell
Si l'exécution de scripts est désactivée (erreur *"le chargement de fichiers ps1 est désactivé"*), autorisez temporairement les scripts dans votre session PowerShell :
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
Puis relancez `npm install` depuis le dossier du projet. Cette modification n'affecte que la session PowerShell en cours.
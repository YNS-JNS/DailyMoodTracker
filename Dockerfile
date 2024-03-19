# Étape 1 : Créer l'image de construction
FROM node:18-alpine

WORKDIR /DAILY-MOOD-TRACKER

# Copier les fichiers du package.json et package-lock.json
COPY package.json .

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# build the project
# RUN npm run build

# Exposer le port 80
EXPOSE 3000

# Commande pour démarrer le serveur nginx
CMD ["npm", "start"]

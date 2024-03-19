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

# Terminal

# docker image build -t react-image:dev .
# docker images
# docker run -p 3000:5173 react-image:dev


# How to Push the Image to Docker Hub

# docker login
# docker image tag react-example-image <username>/react-example-image
# docker image tag react-image:dev farhanishappy/daily-mood-tracker-youness-ait-mbarek
# docker push farhanishappy/daily-mood-tracker-youness-ait-mbarek
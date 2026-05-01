FROM node:24-alpine 

WORKDIR /usr/src/app 
COPY package*.json ./ 

# Clean install
RUN npm ci 

# Copiar el resto del código
COPY . . 

# Si lo quieres en tu bucket, cambiarlo
ENV GCP_BUCKET_URL=https://storage.googleapis.com/pokeneas-bucket-alejito

EXPOSE 8080 
CMD [ "node", "index.js" ] 

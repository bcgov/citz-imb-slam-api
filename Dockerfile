FROM node:17.5.0-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install --production --silent

COPY . .

LABEL org.opencontainers.image.source https://github.com/BCGOV/citz-imb-slam-api

EXPOSE 3000

RUN chown -R node:node /app

USER node

CMD node main.js
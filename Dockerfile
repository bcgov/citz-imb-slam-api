FROM node:17.5.0-alpine3.14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm run build

COPY ./dist .

EXPOSE 3000

RUN chown -R node:node /app

USER node

CMD node main.js
FROM node:17.5.0-alpine3.14
WORKDIR /app
COPY package*.json ./
RUN npm install --production --silent
COPY ./dist .
RUN ls -l
EXPOSE 3000
RUN chown -R node:node /app
USER node
CMD node main.js
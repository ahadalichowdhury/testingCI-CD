FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon

RUN npm install

COPY . .

EXPOSE 5000

USER node

CMD ["npm", "run", "start"]
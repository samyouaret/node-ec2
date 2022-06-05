FROM node:16-alpine

WORKDIR /node-app

COPY package.json /node-app

COPY . /node-app

EXPOSE 8080

RUN yarn install

CMD [ "yarn","run","start"]



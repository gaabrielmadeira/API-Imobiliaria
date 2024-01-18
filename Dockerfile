FROM node:20.11.0-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app


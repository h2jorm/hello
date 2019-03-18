FROM node:10.15.3
WORKDIR /usr/src/app
COPY package.json ./
COPY . .
EXPOSE 8080
CMD node index.js
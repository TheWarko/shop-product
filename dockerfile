
FROM node:22-alpine

WORKDIR /mnt

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 9090

# CMD [ "serve", "-s", "dist" ]
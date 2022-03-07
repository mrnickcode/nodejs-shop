FROM node:lts-stretch-slim
WORKDIR /home/node/app
COPY package.json yarn.lock ./
COPY . .
RUN yarn
CMD sleep 3s && yarn start
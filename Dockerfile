FROM node:10.16
WORKDIR /usr/src/app
ENV VERSION=1

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn config set registry 'https://registry.npm.taobao.org' 

RUN yarn install

COPY . .

EXPOSE 9412:3000

COPY ./wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh

CMD ["npm", "run", "serve"]


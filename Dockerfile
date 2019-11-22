FROM node:10-alpine
WORKDIR /usr/src/app
ENV VERSION=1
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

COPY ./wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh
RUN apk add --no-cache bash

CMD ["./wait-for-it.sh", "db:3306", "--timeout=10000", "--", "npm", "run", "serve"]


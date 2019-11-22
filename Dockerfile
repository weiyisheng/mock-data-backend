FROM node:10-alpine
WORKDIR /usr/src/app
ENV VERSION=1
COPY ./package*.json ./

RUN echo "https://mirrors.aliyun.com/alpine/v3.9/main/" > /etc/apk/repositories && \
    echo "https://mirrors.aliyun.com/alpine/v3.9/community/" >> /etc/apk/repositories && \
    echo "https://mirrors.aliyun.com/alpine/edge/testing/" >> /etc/apk/repositories && \
    npm config set registry 'https://registry.npm.taobao.org' 

RUN npm install

COPY . .
EXPOSE 3000

COPY ./wait-for-it.sh ./
RUN chmod +x ./wait-for-it.sh
RUN apk add --no-cache bash

CMD ["./wait-for-it.sh", "db:3306", "--timeout=10000", "--", "npm", "run", "serve"]


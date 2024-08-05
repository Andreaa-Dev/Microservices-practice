FROM node:20

WORKDIR /app

COPY ../../package.json ./

COPY ./package.json ./services/service-a/package.json

RUN yarn install

COPY ../../ .

WORKDIR /app/services/service-a

COPY ./app.js .

EXPOSE 5000

CMD ["yarn", "start"]
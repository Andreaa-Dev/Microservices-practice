FROM node:20

WORKDIR /app

COPY ../../package.json ./

COPY ./package.json ./services/service-b/package.json

RUN yarn install

COPY ../../ .

WORKDIR /app/services/service-b

COPY ./app.js .

EXPOSE 5000

CMD ["yarn", "start"]
FROM node:14

WORKDIR /app

EXPOSE 5000

CMD [ "npm", "start" ]
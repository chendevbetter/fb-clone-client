FROM node:16.18

WORKDIR app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

RUN chmod 777 /node_modules

CMD ["npm", "start"]
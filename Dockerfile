FROM node:19-alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]

EXPOSE 3000
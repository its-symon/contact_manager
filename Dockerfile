FROM node:16-slim

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
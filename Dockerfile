FROM node:18-alpine3.18

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
EXPOSE 8080 

CMD ["npm", "start"]
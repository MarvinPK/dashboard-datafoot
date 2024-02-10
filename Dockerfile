FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

#Pour production

#RUN npm run build

#EXPOSE 3000

#CMD [ "npm", "run", "preview" ]

CMD ["npm", "run", "dev"]
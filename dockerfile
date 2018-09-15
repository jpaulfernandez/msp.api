FROM node:10.10.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g grunt
RUN npm install
CMD ["npm", "start"]
EXPOSE 5000


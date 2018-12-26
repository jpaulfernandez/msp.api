FROM node:10.10.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g grunt nodemon typescript tslint
RUN npm install
CMD ["nodemon", "./bin/www"]
EXPOSE 5000


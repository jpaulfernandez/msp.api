FROM node:10.10.0-alpine
WORKDIR /usr/src/app
CMD [ "cd", "/usr/src/app" ]
COPY . .
RUN npm install -g grunt
RUN npm install
RUN npm run start
EXPOSE 5000


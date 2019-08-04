FROM node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN yarn global add nodemon
RUN yarn
COPY . . 
CMD ["nodemon"]

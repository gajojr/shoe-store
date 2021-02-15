FROM node:14

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Bundle app source
COPY server/ /usr/src/app/

ENV PORT 5000

CMD [ "npm", "start" ]
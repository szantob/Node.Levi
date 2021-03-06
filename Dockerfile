FROM node:8
WORKDIR /srv/http
USER root
#Install dependencies
RUN apt-get update; apt-get upgrade -y;

#Expose ports
EXPOSE 80

COPY ./run.sh ./

#Setup NodeJs
COPY ./node ./node
WORKDIR /srv/http/node
RUN npm install;

#Start container
WORKDIR /srv/http
CMD ./run.sh

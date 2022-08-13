FROM node:16.15-buster-slim

RUN apt update && apt -y upgrade \
    && npm install -g npm@8.11.0 && npm install -g @angular/cli@14.1.0 \
    && apt install -y vim && apt list --upgradable


RUN mkdir /app

COPY . /app

WORKDIR /app

ENTRYPOINT [ "/app/entrypoint.sh" ]

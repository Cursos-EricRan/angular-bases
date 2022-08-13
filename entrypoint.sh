#!/bin/bash

echo "Compilando apps"
npm install

echo "Levantando app"
ng serve --host 0.0.0.0 --port 80 --poll=100

while true
do
  sleep 20
done

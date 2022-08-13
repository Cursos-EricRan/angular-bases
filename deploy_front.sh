#!/bin/bash
# ! Este archivo solo funciona en MacOs y distribuciones de Linux !

# Si existe BUILD te crea el contenedor
BUILD=${1:-false}
END=${1:-false}

# Variables
IMAGE_NAME=bases
IMAGE_TAG=v1
CONTAINER_NAME=bases

if [ "$BUILD" == "build" ]; then
  echo "Building ${IMAGE_NAME}..."
  docker build -t "$IMAGE_NAME":"$IMAGE_TAG" .
fi

# Si existe END terminar el proceso
END=${1:-false}
if [ "$END" == "end" ]; then
  echo "End docker image..."
  docker rm -f "$IMAGE_NAME"
  exit 0
fi

# Bajar el servicio
docker rm -f "$CONTAINER_NAME"

# Comando para iniciar el Angular
# -d or -it para hacer switch entre mostrarlo en el Command
docker run --name "$CONTAINER_NAME" -p 80:80 -v "$(pwd):/app" -d -it "$IMAGE_NAME":"$IMAGE_TAG"
#docker run --name front -p 80:80 --env-file vars.env --network adinfi -v "$(pwd):/app" -d -it beta:front npm start
#docker exec -it front bash
#command npm start

# Comando para ver los logs del contenedor
docker logs -f "$CONTAINER_NAME"

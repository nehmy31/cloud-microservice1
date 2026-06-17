#!/bin/bash
set -e

echo "Starting automated microservice deployment..."
docker-compose down
docker-compose up --build -d

echo "Allowing stack to initialize..."
sleep 10

bash ./scripts/health_check.sh

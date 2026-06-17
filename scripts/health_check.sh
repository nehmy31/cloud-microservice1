#!/bin/bash
echo "Evaluating container engine status..."
if curl -s http://localhost:8080 | grep -q "Healthy"; then
    echo "SUCCESS: Microservice pipeline and proxy layer operational."
    exit 0
else
    echo "ERROR: Health check failed. Outputting runtime logs:"
    docker-compose logs nginx
    exit 1
fi

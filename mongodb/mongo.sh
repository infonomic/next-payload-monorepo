#!/bin/bash
docker compose --project-directory . --file ./docker-compose.yml --project-name next-server "$@"

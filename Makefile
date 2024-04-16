up:
	docker compose --env-file ./server/.env --env-file ./client/.env up -d --build
stop:
	docker stop fta2024-client fta2024-server fta2024-redis
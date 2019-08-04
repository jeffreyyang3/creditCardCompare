serve:
	docker-compose up
pull:
	cd creditBack && git pull &
	cd ./creditFront && git pull;
update:
	docker exec -it $(shell docker ps -qf "name=front") sh -c 'rm -f yarn.lock && yarn' && docker exec -it $(shell docker ps -qf "name=api") sh -c 'rm -f yarn.lock && yarn'

build:
	docker-compose up --build

#Build docker image
dcbuild:
	docker-compose build

#Build only backend
dcbackend:
	docker-compose build backend

#Build only frontend
dcfrontend:
	docker-compose build frontend

#Run docker containers
dcup:
	docker-compose up

#Stop and remove containers
dcdown:
	docker-compose down

#Stop, remove, build and run containers
reset: dcdown dcbuild dcup

#Stop and remove containers, build backend and run containers
resetbackend: dcdown dcbackend dcup

#Stop and remove containers, build frontend and run containers
resetfrontend: dcdown dcfrontend dcup
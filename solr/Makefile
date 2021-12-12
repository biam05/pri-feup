#Build docker image
dbuild:
	docker build . -t recipes-img

#Run docker image
drun:
	docker run --name recipes -p 8983:8983 recipes-img

dclean:
	docker rm -f recipes

docker: dclean dbuild drun
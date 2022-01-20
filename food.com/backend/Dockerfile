FROM solr:8.10

WORKDIR /backend

COPY data/food.csv /backend/data/food.csv
#COPY data/food_subset1.csv /backend/data/food_subset1.csv
#COPY data/food_subset2.csv /backend/data/food_subset2.csv
#COPY data/food_subset3.csv /backend/data/food_subset3.csv
#COPY data/food_subset4.csv /backend/data/food_subset4.csv

COPY data/schema.json /backend/data/schema.json

COPY data/stop.txt /backend/data/stop.txt

COPY config/startup.sh /backend/scripts/startup.sh

COPY config/web.xml /opt/solr-8.10.1/server/solr-webapp/webapp/WEB-INF/

ENTRYPOINT ["/backend/scripts/startup.sh"]
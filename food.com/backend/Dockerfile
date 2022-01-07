FROM solr:8.10

WORKDIR /backend

COPY data/food.csv /backend/data/food.csv
#COPY data/food_subset1.csv /data/food_subset1.csv
#COPY data/food_subset2.csv /data/food_subset2.csv
#COPY data/food_subset3.csv /data/food_subset3.csv
#COPY data/food_subset4.csv /data/food_subset4.csv

COPY data/schema.json /backend/data/schema.json

COPY data/stop.txt /backend/data/stop.txt

COPY startup.sh /backend/scripts/startup.sh

ENTRYPOINT ["/backend/scripts/startup.sh"]
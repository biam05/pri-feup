FROM solr:8.10

COPY data/food.csv /data/food.csv
#COPY data/food_subset1.csv /data/food_subset1.csv
#COPY data/food_subset2.csv /data/food_subset2.csv
#COPY data/food_subset3.csv /data/food_subset3.csv
#COPY data/food_subset4.csv /data/food_subset4.csv

COPY data/schema.json /data/schema.json

COPY data/stop.txt /data/stop.txt

COPY startup.sh /scripts/startup.sh

ENTRYPOINT ["/scripts/startup.sh"]
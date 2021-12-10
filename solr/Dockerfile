FROM solr:8.10

COPY data/food.csv /data/food.csv

COPY data/schema.json /data/schema.json

COPY startup.sh /scripts/startup.sh

ENTRYPOINT ["/scripts/startup.sh"]
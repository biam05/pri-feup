FROM solr:8.10

COPY food.csv /data/food.csv

COPY startup.sh /scripts/startup.sh

ENTRYPOINT ["/scripts/startup.sh"]

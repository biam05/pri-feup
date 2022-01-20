#!/bin/bash

echo "::::: precreate-core recipes ::::::"
precreate-core recipes

# Start Solr in background mode so we can use the API to upload the schema
echo ":::::: solr start ::::::"
solr start

echo ":::::: sleep 5 ::::::"
sleep 5

echo ":::::: stop.txt ::::::"
cp ./data/stop.txt /var/solr/data/recipes

echo ":::::: mysynonyms.txt ::::::"
cp ./data/mysynonyms.txt /var/solr/data/recipes

# Schema definition via API
#echo "--- curl schema"
curl -X POST -H 'Content-type:application/json' \
    --data-binary @./data/schema.json \
    http://localhost:8983/solr/recipes/schema


# Populate collection
echo -e ":::::: curl data ::::::"
curl http://localhost:8983/solr/recipes/update/csv --data-binary @./data/food.csv -H 'Content-type:text/plain; charset=utf-8'
#curl http://localhost:8983/solr/recipes/update/csv --data-binary @./data/food_subset1.csv -H 'Content-type:text/plain; charset=utf-8'
#curl http://localhost:8983/solr/recipes/update/csv --data-binary @./data/food_subset2.csv -H 'Content-type:text/plain; charset=utf-8'
#curl http://localhost:8983/solr/recipes/update/csv --data-binary @./data/food_subset3.csv -H 'Content-type:text/plain; charset=utf-8'
#curl http://localhost:8983/solr/recipes/update/csv --data-binary @./data/food_subset4.csv -H 'Content-type:text/plain; charset=utf-8'

# Restart in foreground mode so we can access the interface
echo -e ":::::: solr restart -f ::::::"
solr restart -f
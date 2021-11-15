.PHONY: dataset clean

#Replaces the old statistics files with the new ones
all: dataset statistics

#Cleans up the statistics folder
clean:
	del statistics\*.png

dataset:
	echo Download the dataset and clean using OpenRefine, which produces food.csv file, in ./dataset

#Prints wordclouds and histogram of the dataset statistics	
statistics:	clean
	python statistics\data-exploration.py
	
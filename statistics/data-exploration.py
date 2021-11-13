import pandas as pd
import matplotlib.pyplot as plt
import re
import wordcloud as wc

df = pd.read_csv("../dataset/food.csv")

df.plot(kind='hist', y='servings', range=(0,60), bins=12)
plt.savefig("servings_hist.png")

final_terms = ""
s = set(df['search_terms'])
for set_terms in s:
    final_terms += set_terms
final_terms = final_terms.replace("{"," ")
final_terms = final_terms.replace("}"," ")
final_terms = final_terms.replace(","," ")
final_terms = final_terms.replace("'"," ")
final_terms = final_terms.replace("\n"," ")
final_terms = re.sub(' +', ' ', final_terms)

wordcloud = wc.WordCloud(background_color='white', collocations=False, regexp=r'\w[\w-]+', scale=1, width=500, height=500).generate(final_terms);
wordcloud.to_file("wordcloud_search_terms.png")

final_tags = ""
t = set(df['tags'])
for tags in t:
    final_tags += tags
    
final_tags = final_tags.replace("["," ")
final_tags = final_tags.replace("]"," ")
final_tags = final_tags.replace(","," ")
final_tags = final_tags.replace("'"," ")
final_tags = final_tags.replace("\n"," ")
final_tags = re.sub(' +', ' ', final_tags)

wordcloud = wc.WordCloud(background_color='white', collocations=False, regexp=r'\w[\w-]+', scale=1, width=500, height=500).generate(final_tags);
wordcloud.to_file("wordcloud_tags.png")

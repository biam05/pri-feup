import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("../dataset/food.csv")

df.plot(kind='hist', y='servings')

plt.show()

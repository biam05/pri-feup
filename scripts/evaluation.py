# SETUP
import matplotlib.pyplot as plt
from sklearn.metrics import PrecisionRecallDisplay
import numpy as np
import json
import requests
import pandas as pd

queries = [
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&fq=search_terms%3Adiabetic&indent=true&q.op=OR&q=diabetic%20dessert&qf=name%20search_terms%20tags%20ingredients%20description%20steps&wt=json",
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&fq=search_terms%3Adinner&indent=true&q.op=OR&q=christmas%20dinner&qf=name%20search_terms%20tags%20ingredients%20description%20steps&wt=json",
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&indent=true&q.op=OR&q=pancake%20-pan%20-griddle&qf=name%20search_terms%20tags%20ingredients%20description%20steps&wt=json",
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&fq=search_terms%3Adinner&fq=servings%3A8&fq=tags%3Adish&indent=true&q.op=OR&q=lasagna&qf=name%20search_terms%20tags%20ingredients%20description%20steps&wt=json"
]

filtered_queries = [
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&fq=search_terms%3Adiabetic&indent=true&q.op=OR&q=diabetic%20dessert&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json",
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&fq=search_terms%3Adinner&indent=true&q.op=OR&q=christmas%20dinner&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json",
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&indent=true&q.op=OR&q=pancake%20-pan%20-griddle&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json",
    "http://localhost:8983/solr/recipes/select?defType=edismax&fl=identifier%20name%20description%20ingredients%20serving_size%20servings%20steps%20tags%20score&fq=search_terms%3Adinner&fq=servings%3A8&fq=tags%3Adish&indent=true&q.op=OR&q=lasagna&qf=name%5E5%20search_terms%5E3%20tags%5E3%20ingredients%5E3%20description%20steps&wt=json",
    ]

def query_processing(q : int, filtered : bool, q_file : str, link : str):
    # Read qrels to extract relevant documents
    relevant = list(map(lambda el: el.strip(), open(q_file).readlines()))
    for i in range(len(relevant)):
        relevant[i]= int(relevant[i])
    # Get query results from Solr instance
    results = requests.get(link).json()['response']['docs']
    # METRICS TABLE
    # Define custom decorator to automatically calculate metric based on key
    metrics = {}
    #metric = lambda f: metrics.setdefault(f.__name__, f)
    def metric(f): metrics.setdefault(f.__name__, f)

    @metric
    def ap(results, relevant):
        """Average Precision"""
        precision_values = [
            len([
                doc
                for doc in results[:idx]
                if doc['identifier'] in relevant
            ]) / idx 
            for idx in range(1, len(results) + 1)
        ]
        return sum(precision_values)/len(precision_values)

    @metric
    def p10(results, relevant, n=10):
        """Precision at N"""
        return len([doc for doc in results[:n] if doc['identifier'] in relevant])/n

    def calculate_metric(key, results, relevant):
        return metrics[key](results, relevant)

    # Define metrics to be calculated
    evaluation_metrics = {
        'ap': 'Average Precision',
        'p10': 'Precision at 10 (P@10)'
    }

    # Calculate all metrics and export results as LaTeX table
    df = pd.DataFrame([['Metric','Value']] +
        [
            [evaluation_metrics[m], calculate_metric(m, results, relevant)]
            for m in evaluation_metrics
        ]
    )

    if filtered:
        with open(f'results/filtered_results_{q + 1}.tex', 'w') as tf:
            tf.write(df.to_latex())
    else:
        with open(f'results/results_{q + 1}.tex', 'w') as tf:
            tf.write(df.to_latex())

    # PRECISION-RECALL CURVE
    # Calculate precision and recall values as we move down the ranked list
    precision_values = [
        len([
            doc 
            for doc in results[:idx]
            if doc['identifier'] in relevant
        ]) / idx 
        for idx, _ in enumerate(results, start=1)
    ]

    recall_values = [
        len([
            doc for doc in results[:idx]
            if doc['identifier'] in relevant
        ]) / len(relevant)
        for idx, _ in enumerate(results, start=1)
    ]

    precision_recall_match = {k: v for k,v in zip(recall_values, precision_values)}

    # Extend recall_values to include traditional steps for a better curve (0.1, 0.2 ...)
    recall_values.extend([step for step in np.arange(0.1, 1.1, 0.1) if step not in recall_values])
    recall_values = sorted(set(recall_values))

    # Extend matching dict to include these new intermediate steps
    for idx, step in enumerate(recall_values):
        if step not in precision_recall_match:
            if recall_values[idx-1] in precision_recall_match:
                precision_recall_match[step] = precision_recall_match[recall_values[idx-1]]
            else:
                precision_recall_match[step] = precision_recall_match[recall_values[idx+1]]

    disp = PrecisionRecallDisplay([precision_recall_match.get(r) for r in recall_values], recall_values)
    disp.plot()
    if filtered:
        plt.savefig(f'results/filtered_precision_recall_{q + 1}.png')
    else:
        plt.savefig(f'results/precision_recall_{q + 1}.png')

    return disp


for index in range(0, len(queries)):
    url = queries[index]
    print(f":: Query nº {index + 1}")
    q_file = f'../solr/queries/qrel_{index + 1}.txt'
    disp = query_processing(index, False, q_file, url)
    url = filtered_queries[index]
    print(f":: Query nº {index + 1} Filtered")
    q_file = f'../solr/queries/qrel_{index + 1}.txt'
    disp = query_processing(index, True, q_file, url)
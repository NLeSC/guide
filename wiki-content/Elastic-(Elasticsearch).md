Elastic is a distributed, scalable, real-time full-text search and analytics engine. It enables you to search, analyze, and explore data.

[Getting started with Elastic](https://www.elastic.co/guide/en/elasticsearch/guide/current/getting-started.html)

## Plugins

* [Marvel](https://www.elastic.co/guide/en/marvel/current/index.html): management and monitoring plugin. Particularly useful because it contains Sense, a web based developer console that allows you to easily issue calls to Elasticsearch's REST API.
  * Install:
     1. From the Elasticsearch home directory, run: `bin/plugin -i elasticsearch/marvel/latest`
     2. Restart your Elasticsearch node
     3. Open [http://localhost:9200/_plugin/marvel/sense/index.html](http://localhost:9200/_plugin/marvel/sense/index.html)
* [elasticsearch-head](http://mobz.github.io/elasticsearch-head/): web front end for browsing and interacting with an Elastic Search cluster.
  * Install:
    1. From the Elasticsearch home directory, run: `elasticsearch/bin/plugin -install mobz/elasticsearch-head`
    2. Open [http://localhost:9200/_plugin/head/](http://localhost:9200/_plugin/head/)

## Benchmarking elasticsearch

Eric de Kruijf worked on a Master's project to benchmark/optimize Elasticsearch for [Texcavator](https://www.esciencecenter.nl/project/texcavator) ([code](https://github.com/UUDigitalHumanitieslab/texcavator)). He graduated in August 2015.

* Thesis: [Optimizing ElasticSearch for Texcavator](https://github.com/NLeSC/benchmarking-elasticsearch/blob/master/doc/Master-Thesis_Optimizing-ElasticSearch-for_Texcavator_Eric-de-Kruijf.pdf)
* Code: https://github.com/NLeSC/benchmarking-elasticsearch
    * Of particular interest might be Eric's implementation of word cloud generation using Elasticsearch-Hadoop
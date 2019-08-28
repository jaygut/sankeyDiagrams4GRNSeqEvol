# sankeyDiagrams4GRNSeqEvol
This code provides a set of routines used to create a Sankey diagram for visualizing simulated data (paper to be submitted shortly) that recreates the adaptive evolution of diploid gene regulatory networks (GRNs). The main functions are called from the [d3](https://github.com/d3/d3) and the [d3-sankey-diagram](https://github.com/ricklupton/d3-sankey-diagram) libraries. In this way, this tutorial provides a reusable D3 Sankey diagram.

To run the example an http-server must be started, e.g. using python as follows:  

python -m SimpleHTTPServer 8080  

Then you should be able to run the example by opening:  

http://localhost:8080/index.html

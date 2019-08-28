  /*
    This script builds up a Sankey diagram from a dataset stored in a json file (see /input_data) 
    The main functions by which the Sankey diagram are built and rendered are being called from the
    libraries D3 and d3-sankey-diagram. Thus, this script provides a reusable D3 diagram  
  */
  
  // Setting up SVG feats
  var svg = d3.select('svg');
  var width = +svg.attr('width');
  var height = +svg.attr('height');
  var margin = { top: 10, left: 100, bottom: 10, right: 50 };
  
  //Set this to 2 to show values on nodes
  var nodeLabelThr = 100;

  //Setting up color codes for flows
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  //Setting up Sankey layout
  var layout = d3.sankey()
                   .extent([[margin.left, margin.top],
                           [width - margin.left - margin.right, height - margin.top - margin.bottom]]);
  
  //Setting up diagram to be called below
  var diagram = d3.sankeyDiagram()
                    .linkMinWidth(function(d) { return 0.1; })
                    .linkColor(function(d) { return color(d.color); });

d3.json("input_data/Ancestor36LOGEvol.json").then(function(data){

  var graph = data.graph;
  var order = data.order;
  
  layout.linkValue(function (d) { return d.value; })
        .nodeWidth(30);

  diagram.nodeValue(function(d) {
    if (d.value > nodeLabelThr) {
    nv = d.value;
  } else {
    nv = null;
  }
    return nv; });

  layout.ordering(order);

  layout(graph);

  // Render Sankey
  svg.datum(graph)
      .call(diagram);

});
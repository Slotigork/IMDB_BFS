function Graph(){
  this.queue=[];
  this.nodes=[];
  yhis.graph={};
}

Graph.prototype.addNode(node){
  this.nodes.push(node);
  let title = node.value;
  this.graph[title]= node;

}

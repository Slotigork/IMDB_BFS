function Node(value){
  this.value=value;
  this.parent=null;
  this.checked=false;
  this.edges=[];
}

Node.prototype.addEdge = function(node){
    this.edges.push(node);  
}

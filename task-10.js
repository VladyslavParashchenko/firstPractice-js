///////////////////////////***10***//////////////////////////////
function count (obj) {
  var countOfProperty = 0;
  for(var k in obj){
    countOfProperty++;
}
return countOfProperty;
}
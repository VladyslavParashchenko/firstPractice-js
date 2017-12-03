///////////////////////////***8***//////////////////////////////
function pluck(objects, fieldName) {
var arr = [];
  for(var i = 0; i < objects.length; i++){
     if (fieldName in objects[i]) {
     arr.push(objects[i][fieldName]);
}
}
return arr;
}
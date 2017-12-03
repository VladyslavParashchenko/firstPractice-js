function bind(fn, context) {
   return function(){
return fn.apply(context,[].slice.call(arguments));
}
}
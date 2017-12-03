////////////////////////***1***//////////////////////////
function sequence(start, step) {
  if(start === undefined){
	start=0;
  }
  if(step === undefined){
	step=1;
  }
  start-=step;
  return function () {
	start+=step;
	return start;
  }
}
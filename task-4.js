////////////////////////***4***//////////////////////////
function fmap(a, gen) {
    return function () {
       return a(gen.apply(null,[].slice.call(arguments,'_')));
	}
}
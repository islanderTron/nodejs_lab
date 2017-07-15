// HELLO WORLD
// console.log('HELLO WORLD');

// BABY STEPS
var sum = 0;
for(var i = 1; i<process.argv.length; i++){
	if(i>1){
		sum += (process.argv[i]);
	}
}
console.log(sum);
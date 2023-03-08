const args = process.argv.slice(2);
console.log(args);

// console.log(args.length);
const revs = function(args) {
  for (let i = 0; i < args.length; i++){
    
    let newRev = "";
    for (let j = args[i].length - 1; 0 <= j; j--){
      newRev += args[i][j];      
    }
    args[i] = newRev;
    // if (typeof args[i] === 'string'){
    //   args[i] = "String";
    // }
  }
  
  return args;
} 

console.log(revs(args));
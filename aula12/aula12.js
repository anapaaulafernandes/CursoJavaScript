let varA = 'A';
let varB = 'B';
let varC = 'C';


// varA = varB;
// varB = varC;
// varC = varA;

// varC = 'A'

let varTemporaria = varA
varA = varB
varB = varC
varC = varTemporaria

console.log(varA, varB, varC);

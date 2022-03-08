"use strict";
//UNION TYPE and LITERAL TYPE
Object.defineProperty(exports, "__esModule", { value: true });
function combine(input1, input2, 
//LITERAL TYPE
resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        // convert to number
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    /*  if (resultConversion === 'as-number')   {
         return +result;
     } else {
         return result.toString();
     } */
}
const combinedAges = combine(30, 26, 'as-number');
const combinedStringAges = combine('30', '26', 'as-number');
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedAges);
console.log(combinedStringAges);
//# sourceMappingURL=union-aliases.js.map
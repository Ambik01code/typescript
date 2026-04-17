// @variable('GFG is Green')
// class GFG { }

// console.log(GFG.property);

let variable = function (color) {
    return function (target) {
        target.property = color;
    }
};

class GFG {}

class GFR {}

variable('GFG is Green')(GFG);
variable('GFG is Red')(GFR);
console.log(GFG.property);
console.log(GFR.property);

function manipulateArray(arr){
    arr = arr.map(function(i) {
        if (i === 22) {
            i = 0;
        }
        return i;
    });
    return arr;
}

let a = [11, 22, 33, 'conditionals in arrow functions?'];
console.log(manipulateArray(a), a);

function filtering(arr){
    arr = arr.filter(function(i){
        if (i === 22 || typeof i === 'string'){
            return true;
        }
        return false;
    });
    return arr;
}

console.log(filtering(a), a);

function reducing(arr) {
    arr = arr.reduce(function(elm, acc){
        let i = filterStrings(Array.from(elm));
        if (i){
            acc += elm;
        }
        return acc;
    });
    return arr;
}

console.log(reducing(a), a, 'tt');

function forEaching(arr){
    arr = arr.forEach(function(i){
        console.log(i);
    });
    return arr;
}

forEaching(a);
console.log(a);

function filterStrings(arr){
    return arr.filter((elem) => {
        if (typeof elem === 'number'){
            return true;
        } else {
            return false;
        }
    });
}

console.log(filterStrings(a), a);


const arrowFunc = (arr) => {return arr.reduce((elm, acc) => {
    return acc + elm;});
}

console.log(arrowFunc(a), a, 'arrRed');

var counter = {
    count: (c) => {return c + 1;},
    counted: 0
};


for (let i = 0; i < 10; i++){
    console.log(counter.counted = counter.count(counter.counted));
}

const addOne = counter.count;
console.log(addOne(counter.counted));

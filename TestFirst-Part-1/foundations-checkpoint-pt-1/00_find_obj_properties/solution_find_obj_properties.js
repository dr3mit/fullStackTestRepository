z/* eslint-disable no-unused-vars */

function findObjPropsHasOwn(obj){
    let retStr = '';
    let keyArr = [];
    let spacer = '';
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            keyArr.push(key);
        }
    }

    for (let i=0; i<keyArr.length; i++){
        if (keyArr.length > 1 && i !== keyArr.length-1){
            spacer = ', ';
        }else if (i === keyArr.length-1){
            spacer = '';
        }
        retStr += String(keyArr[i]) + spacer; 
    }
    return retStr; 
}

function findObjKeys(obj){
    let retStr = '';
    let keyArr = Object.keys(obj);
    let spacer = '';
    for (let i=0; i<keyArr.length; i++){
        if (keyArr.length > 1 && i !== keyArr.length-1){
            spacer = ', ';
        }else if (i === keyArr.length-1){
            spacer = '';
        }
        retStr += String(keyArr[i]) + spacer; 
    }
    return retStr; 
}

let testObj = { drew : 1, 
    claire : 2, 
    dexter : 3};

console.log(findObjKeys(testObj));
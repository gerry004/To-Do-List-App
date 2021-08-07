// Each of the below functions take currentValue(required), index(optional), array(optional)

function ArrayFunctions() { 
    // data space
    let numArray = [];
    let strArray = [];

    // power space
    const getNumArray = () => numArray;

    const getStrArray = () => strArray;

    const isNumber = (value) => {
        return typeof value == 'number';
    }

    const isString = (value) => {
        return typeof value == 'string';
    }

    //every - return Boolean
    const setNumArray = (array) => {
        if (array.every(isNumber) === true){
            numArray = array;
        } 
        else {
            throw new Error("numArray must contain only numbers")
        }
    }

    const setStrArray = (array) => {
        if (array.every(isString) === true){
            strArray = array;
        } 
        else {
            throw new Error("strArray must contain only strings");
        }
    }
    
    const square = (value, index, array) => {
        array[index] = value*value;
    }

    //forEach - changes original array
    const squareNumArray = () => {
        numArray.forEach(square);
    }

    const capitalize = (value, index, array) => {
        array[index] = value.charAt(0).toUpperCase() + value.slice(1);
    }

    const capitalizeStrArray = () => {
        strArray.forEach(capitalize);
    }

    const checkOverTen = (value) => {
        return value > 10;
    }

    //filter - new array of elements that pass a test
    const getAllNumOverTen = () => {
        overTenArray = numArray.filter(checkOverTen);
        return overTenArray;
    }

    // api space
    return {
        getNumArray, 
        getStrArray,
        setNumArray,
        setStrArray,
        squareNumArray,
        capitalizeStrArray,
        getAllNumOverTen
    }
}

const numArray = [21, 23, 3, 8, 9];
const strArray = ["apple", "orange", "banana", "pear"];

arr = ArrayFunctions()

arr.setNumArray(numArray)
arr.setStrArray(strArray)

arr.squareNumArray()
arr.capitalizeStrArray()
overTenArray = arr.getAllNumOverTen()

console.log(arr.getNumArray())
console.log(arr.getStrArray())
console.log(overTenArray)


// map - same as forEach but creates a new array of values after function

const square = (value) => { 
    return value*value
}

squaredArray = numArray.map(square)
console.log(squaredArray);

// sort - sorts array alphabeltically or numerically

console.log(strArray.sort((v1, v2)=> {
    return v1 > v2 ? 1 : v1 < v2 ? -1 : 0;
}));

// reduce 

const findSum = (total, value) => { 
    return total += value
}

console.log(numArray.reduce(findSum, 0))

// find - returns value of the first True (doesn't check after, returns False otherwise)

const isEvenInArray = (value) => {
    return value%2 == 0;
}

console.log(numArray.find(isEvenInArray));


const isGreaterThanTen = (value) => {
    return value > 10;
}
// some - if one True value, returns True

console.log(numArray.some(isGreaterThanTen));

// promise in javascript
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.llg('go get the data back');
//         resolve({foo: 777});
//     }, 400);
// });

// const reviewItems = [{title: "review 1"}, {title: "review 2"}, {title: "review 3"}, {title: "review 4"}, {title: "review 5"}]
// let obj = {};
// const perChunk = 2;

// // {1: [{title: "review 1"}, {title: "review 2"}], 2: [{title: "review 3"}, {title: "review 4"}], 3: [{title: "review 5"}]}

// function makeChunk(resultArray, item, index) {
//     //console.log(resultArray, item, index);
//     const chunkIndex = Math.floor(index/perChunk);
//     //console.log(chunkIndex);
//     if(!resultArray[chunkIndex]) {
//         //console.log(resultArray[chunkIndex]);
//         resultArray[chunkIndex] = [] // start a new chunk
//     }
  
//     resultArray[chunkIndex].push(item);
//     console.log(resultArray[chunkIndex]);
  
//     return resultArray;
// }

// const result = reviewItems.reduce(makeChunk, [])
// console.log(result)

// for (let i = 0; i < result.length; i++) {
//     obj[i+1] = result[i]; 
// }

// console.log(obj)

// ,
// reviewItemsDivided() {
//   let final = {};
//   const result = this.reviewItems.reduce(this.splitReviewItemsArray, []);
//   for (let i = 0; i < result.length; i++) {
//     final[i+1] = result[i]; 
//   }
//   return final
// }
// ,
//     splitReviewItemsArray(resultArray, item, index) {
//       const chunkIndex = Math.floor(index/this.perPage);
//       if(!resultArray[chunkIndex]) {
//           resultArray[chunkIndex] = []
//       }
//       resultArray[chunkIndex].push(item);
//       return resultArray;
//     }

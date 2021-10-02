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

console.log('commiting to github')
console.log('testing my commit to github')

console.log('commiting to github')
console.log('testing my commit to github')

// FOR EACH //
Array.prototype.myEach = function() {

};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function(array,operation) {
    let returnValue=[];
    for(let i=0;i<array.length; i++)
    {
        if(operation(array[i]))
        {
            returnValue.push(array[i]);
        }
    }
    return returnValue;
};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

let myArray=[1,2,3,4,5,6,7,8]

let printOut = myArray.filter(number => number<6 );
console.log(printOut);
printOut = myArray.myFilter(number => number<6 );
console.log(printOut);
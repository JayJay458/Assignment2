// FOR EACH //
Array.prototype.myEach = function() {

};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

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
Array.prototype.myIncludes = function(searchFor,fromIndex=0) {

    for(let i =fromIndex;i<this.length;i++)
    {
        if(this[i]===searchFor)
        {
            return true;
        }

    }
    return false;

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

//test

let myArray=[1,2,3,4,5,6,7]
console.log(myArray.includes(6));
console.log(myArray.myIncludes(6));
console.log(myArray.includes(12));
console.log(myArray.myIncludes(12));
console.log(myArray.includes(2,3));
console.log(myArray.myIncludes(2,3));
console.log(myArray.includes(5,3));
console.log(myArray.myIncludes(5,3));

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
Array.prototype.myEvery = function(operation) {
    for(let i =0;i<this.length;i++)
    {
        if(!operation(this[i],i,this))
        {
            return false;
        }
    }
    return true;

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


//Test

let myArray=[1,2,3,4,5,6]
let result=myArray.every(element=>element%2===0)
console.log(result)
result=myArray.myEvery(element=>element%2===0)
console.log(result)

myArray=[2,4,6,8]
result=myArray.every(element=>element%2===0)
console.log(result)
result=myArray.myEvery(element=>element%2===0)
console.log(result)
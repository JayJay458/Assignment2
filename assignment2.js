// FOR EACH //
Array.prototype.myEach = function(operation) {

    for(let i=0;i<this.length;i++)
    {
        if(this[i]===undefined) continue;
        operation(this[i],i,this);

    }
};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function(array,condition) {


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

let myArray= [ 1,2,3,4,5,6,7];


myArray.myEach((element,i)=>console.log(element,i,myArray));

myArray.forEach((element,i)=>console.log(element,i,myArray));
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
Object.grabKeys = function(obj) {

    let retValue=[];
    for(const property in obj)
    {
        if(property===undefined) continue;
        retValue.push(`${property}`);
    }
    return retValue;
};

// VALUES //
Object.grabValues = function() {

};

//Test
let myObject={
    a: 'somestring',
b: 42,
c: false};

console.log(Object.keys(myObject));
console.log(Object.grabKeys(myObject));
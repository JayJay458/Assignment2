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
Array.prototype.mySome = function(operation) 
{

    for(let i=0;i<this.length;i++)
    {
        if(this[i]===undefined) continue;
        if(operation(this[i],i,this))
        {
            return true;
        }   
    }

    return false;
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

//Test


let myArray=[1,1,1,1,1,1]

let result=myArray.some(element=> element%2===0);
console.log(result);

result=myArray.mySome(element=> element%2===0);
console.log(result);


myArray=[1,1,2,1,1]

result=myArray.some(element=> element%2===0);
console.log(result);

result=myArray.mySome(element=> element%2===0);
console.log(result);



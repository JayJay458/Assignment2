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


// FILTER //
Array.prototype.myFilter = function(operation) {
    let returnValue=[];
    for(let i=0;i<this.length; i++)
    {
        if(operation(this[i],i,this))
        {
            returnValue.push(this[i]);
        }
    }
    return returnValue;



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
Object.grabValues = function(object) {
    let temp_values=[];
    for(const value in object)
    {
        temp_values.push(`${object[value]}`);
    }
    return temp_values;
};





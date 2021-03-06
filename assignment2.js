// FOR EACH //
Array.prototype.myEach = function(operation) {

    for(let i=0;i<this.length;i++)
    {
        if(this[i]===undefined) continue;
        operation(this[i],i,this);

    }

};

// MAP //
Array.prototype.myMap = function(map_function) {
    const temp_array = [];
    for(let i=0; i<this.length; i++)
    {
        temp_array[i] = map_function(this[i]);
    }
    return temp_array;
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
Array.prototype.myReduce = function(reduce_function, init_value){
    if(typeof init_value === "undefined")
    {
        let prev_value = this[0];
        for(let i=1; i<this.length; i++){
            prev_value = reduce_function(prev_value, this[i]);
        }
        return prev_value;
    }
    let temp_value = init_value;
    for(let i=0; i<this.length; i++){
        temp_value = reduce_function(temp_value, this[i]);
    }
    return temp_value;

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
Array.prototype.myIndexOf = function(find_obj, start_from = 0) {
    let index = -1;
    for(let i = start_from; i<this.length; i++)
    {
        if(this[i] === find_obj)
        {
            index = i;
            return index;
        }
    }
    return index;
};

// PUSH //
Array.prototype.myPush = function(...push_obj) {
    let size = this.length;
    for(let x of push_obj)
    {
        this[size] = x;
        size++;
    }
    return size;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(find_obj, start_from = (this.length-1) ) {
    let index = -1;
    for(let i = start_from; i>=0; i--)
    {
        if(this[i] === find_obj)
        {
            index = i;
            return index;
        }
    }
    return index;

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

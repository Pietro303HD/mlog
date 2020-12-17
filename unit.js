"use strict"; 
/**
* Binds a new unit from a type.
* @param {string} Input a Unit Type
*/

class unit {
	constructor(type) {
        this.type = type;
    }
    
    type(){
        return this.type
    }
}

module.exports = unit;
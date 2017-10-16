/**
 * Attach find logic
 */

interface Array<T> {
    find(type:any): any[];
}

// @TODO: how necessary is this?
// if we use this in the core of our engine, it's not likely to be very performant
Array.prototype.find = function(type:any) {
	return this.filter((el:any) => el instanceof type);
};

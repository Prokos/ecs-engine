/**
 * Attach find logic
 */

interface Array<T> {
    find(type:any): any[];
}

Array.prototype.find = function(type:any) {
	return this.filter((el:any) => el instanceof type);
};

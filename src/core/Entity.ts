import Component from 'core/Component';

export default class Entity {
	private components:Component[];

	constructor(components:Component[]) {
		this.components = components;
	}

	get(component:any):any {
		return this.components.find(component)[0];
	}
};
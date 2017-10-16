import Component from 'core/Component';

export default class Entity {
	private components:Component[];

	constructor(components:Component[]) {
		this.components = components;
	}

	getComponent(component:any):any {
		return this.components.find(component)[0];
	}
};
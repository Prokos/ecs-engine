import Component from 'core/Component';
import ReactiveHelper from 'core/ReactiveHelper';

export default class Entity {
	private components:Component[];

	constructor(components:Component[]) {
		this.components = components;
	}

	get(component:any):any {
		return ReactiveHelper.proxyComponent(this.components.filter((c:any) => c instanceof component)[0]);
	}
};
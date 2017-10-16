import Component from 'core/Component';
import Entity from 'core/Entity';

export default class Pool {
	private static entities:Entity[] = [];
	private static components:Component[] = [];

	public static createEntity(entityCreator:() => Entity):Entity {
		const entity:Entity = entityCreator();
		this.entities.push(entity);

		return entity;
	}

	public static get(item:any):any {
		if (item instanceof Entity) {
			return this.entities.find(item);
		} else {
			return this.entities.reduce((prev, curr) => {
				return prev.concat(curr.getComponent(item)); 
			}, []);
		}
	}

	public static createComponent(componentConstructor:any) {
		const component:Component = new componentConstructor();
		this.components.push(component);
		return component;
	}
}

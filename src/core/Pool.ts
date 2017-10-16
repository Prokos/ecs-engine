import Component from 'core/Component';
import Entity from 'core/Entity';
import { ReactMode } from 'core/System';

export default class Pool {
	private static entities:Entity[] = [];
	private static components:Component[] = [];

	// @TODO: createEntity and createComponent
	// should we combine these? (as entities can contain entities for example?)
	// otherwise, get() should also have a separate call for entities and components
	// in any case, entities and components should be created in the same fashion to avoid confusion

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

		// Components that are created directly on the pool are always instantly destroyed next frame
		requestAnimationFrame(() => {
			component.destroy();
		});

		return component;
	}

	public static destroyComponent(component:Component):void {
		const index = this.components.indexOf(component);

		if (index > -1) {
			component.notify(ReactMode.DESTROY);
			this.components.splice(index, 1);
		}
	}
}

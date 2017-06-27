import Entity from 'core/Entity';

export default class Pool {
	private static entities:Entity[] = [];

	public static create(entityCreator:() => Entity):Entity {
		const entity:Entity = entityCreator();
		this.entities.push(entity);

		return entity;
	}
}

import { InitSystem } from 'core/System';
import Entity from 'core/Entity';
import Pool from 'core/Pool';
import GameCanvasEntity from 'entities/GameCanvasEntity';
import CanvasComponent from 'components/CanvasComponent';

export default class CreateCanvasSystem extends InitSystem {
	run():void {
		const entities:any = [];

		for (var i = 0;i < 15;i++) {
			const entity:Entity = Pool.create(GameCanvasEntity);

			// Create and append canvas
			let component:CanvasComponent = entity.get(CanvasComponent);
			component.canvas = document.createElement('canvas');
			document.body.appendChild(component.canvas);

			entities.push(entity);
		}

		entities.forEach((entity:any) => {
			console.log(entity.get(CanvasComponent).test, entity.get(CanvasComponent).test2);
		});
	}
}

import { InitSystem } from 'core/System';
import Entity from 'core/Entity';
import Pool from 'core/Pool';
import GameCanvasEntity from 'entities/GameCanvasEntity';
import CanvasComponent from 'components/CanvasComponent';

export default class CreateCanvasSystem implements InitSystem {
	run():void {
		const entity:Entity = Pool.createEntity(GameCanvasEntity);
		const component:CanvasComponent = entity.getComponent(CanvasComponent);
		
		document.body.appendChild(component.canvas);
	}
}

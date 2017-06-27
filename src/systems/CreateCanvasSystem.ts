import { InitSystem } from 'core/System';
import Entity from 'core/Entity';
import Pool from 'core/Pool';
import GameCanvasEntity from 'entities/GameCanvasEntity';
import CanvasComponent from 'components/CanvasComponent';

export default class CreateCanvasSystem extends InitSystem {
	run():void {
		const entity:Entity = Pool.create(GameCanvasEntity);
		document.body.appendChild(entity.get(CanvasComponent).canvas);
	}
}

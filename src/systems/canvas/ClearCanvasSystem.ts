import Pool from 'core/Pool';
import { UpdateSystem } from 'core/System';
import GameCanvasEntity from 'entities/GameCanvasEntity';
import CanvasComponent from 'components/CanvasComponent';

export default class ClearCanvasSystem implements UpdateSystem {
	run():void {
		const canvasComponents:CanvasComponent[] = Pool.get(CanvasComponent);

		canvasComponents.forEach(component => {
			const { canvas, context } = component;

			context.clearRect(0, 0, canvas.width, canvas.height);
		});
	}
}

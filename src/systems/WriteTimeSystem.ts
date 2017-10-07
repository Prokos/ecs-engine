import Pool from 'core/Pool';
import { UpdateSystem } from 'core/System';
import GameCanvasEntity from 'entities/GameCanvasEntity';
import CanvasComponent from 'components/CanvasComponent';

export default class WriteTimeSystem extends UpdateSystem {
	run():void {
		const canvasComponents:CanvasComponent[] = Pool.get(CanvasComponent);

		canvasComponents.forEach(component => {
			const { canvas, context } = component;
			
			context.font = '48px Arial';
			context.textAlign = 'center';
			context.textBaseline = 'middle';
			
			context.fillText(Math.round(performance.now() / 1000).toString(), canvas.width / 2, canvas.height / 2);
		});
	}
}

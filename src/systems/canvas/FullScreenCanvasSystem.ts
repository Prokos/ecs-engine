import Pool from 'core/Pool';
import { ReactiveSystem, IReactiveSetup, ReactMode } from 'core/System';
import CanvasComponent from 'components/CanvasComponent';
import WindowResizeComponent from 'components/WindowResizeComponent';

export default class FullScreenCanvasSystem extends ReactiveSystem {
	listensTo:IReactiveSetup<any>[] = [{
		mode: ReactMode.CREATE,
		components: [
			CanvasComponent,
			WindowResizeComponent,
		],
	},];

	run(components:any[]):void {
		Pool.get(CanvasComponent).forEach((component:CanvasComponent) => {
			component.canvas.width = window.innerWidth;
			component.canvas.height = window.innerHeight;
		});
	}
}
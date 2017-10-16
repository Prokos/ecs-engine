import { ReactiveSystem, IReactiveSetup, ReactMode } from 'core/System';
import CanvasComponent from 'components/CanvasComponent';
import WindowResizeComponent from 'components/WindowResizeComponent';

export default class FullScreenCanvasSystem implements ReactiveSystem {
	listensTo:IReactiveSetup<any>[] = [{
		mode: ReactMode.CREATE,
		components: [
			CanvasComponent,
			WindowResizeComponent,
		],
	},];

	run(components:any):void {
		components.forEach((component:CanvasComponent) => {
			component.canvas.width = window.innerWidth;
			component.canvas.height = window.innerHeight;
		});
	}
}
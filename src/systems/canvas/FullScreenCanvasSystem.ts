import { ReactiveSystem, IReactiveSetup, ReactMode } from 'core/System';
import CanvasComponent from 'components/CanvasComponent';
import WindowResizeComponent from 'components/WindowResizeComponent';

export default class FullScreenCanvasSystem implements ReactiveSystem {
	listensTo:IReactiveSetup<any>[] = [{
		mode: ReactMode.CREATE,
		components: [
			// @TODO: it doesn't look like our reactivesetup actually distinguishes
			// between different component types... should figure this out
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
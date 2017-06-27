import { ReactiveSystem, IReactiveSetup, ReactMode } from 'core/System';
import CanvasComponent from 'components/CanvasComponent';

export default class FullScreenCanvasSystem extends ReactiveSystem {
	listensTo:IReactiveSetup[] = [{
		mode: ReactMode.ALL,
		component: CanvasComponent,
	}];

	run(components:any):void {
		components.forEach((component:CanvasComponent) => {
			component.canvas.width = window.innerWidth;
			component.canvas.height = window.innerHeight;
		});
	}
}
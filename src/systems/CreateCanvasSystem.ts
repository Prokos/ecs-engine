import { InitSystem } from 'core/System';

export default class CreateCanvasSystem extends InitSystem {
	run():void {
		const canvas = document.createElement('canvas');
		document.body.appendChild(canvas);
	}
}

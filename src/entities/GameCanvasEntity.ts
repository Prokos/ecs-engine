import Entity from 'core/Entity';

import CanvasComponent from 'components/CanvasComponent';

export default () => new Entity([
	new CanvasComponent({
		canvas: document.createElement('canvas'),
		test: Math.random(),
	}),
]);

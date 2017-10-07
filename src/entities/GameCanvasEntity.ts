import Entity from 'core/Entity';

import CanvasComponent from 'components/CanvasComponent';

export default () => {
	const canvas = document.createElement('canvas');
	const context = canvas.getContext('2d');

	return new Entity([
		new CanvasComponent({ canvas, context }),
	]);
};

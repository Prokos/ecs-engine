import 'setup';

import onDOMReady from 'utils/onDOMReady';
import Scene from 'core/Scene';

import CreateCanvasSystem from 'systems/CreateCanvasSystem';
import FullScreenCanvasSystem from 'systems/FullScreenCanvasSystem';

onDOMReady(() => {
	const mainScene = new Scene([
		new CreateCanvasSystem(),
		new FullScreenCanvasSystem(),
	]);
});

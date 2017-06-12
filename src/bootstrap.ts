import 'setup';

import onDOMReady from 'utils/onDOMReady';
import Scene from 'core/Scene';

import CreateCanvasSystem from 'systems/CreateCanvasSystem';

onDOMReady(() => {
	const mainScene = new Scene([
		new CreateCanvasSystem(),
	]);
});

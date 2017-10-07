import 'setup';

import Scene from 'core/Scene';
import Pool from 'core/Pool';

import ClearCanvasSystem from 'systems/canvas/ClearCanvasSystem';
import CreateCanvasSystem from 'systems/canvas/CreateCanvasSystem';
import FullScreenCanvasSystem from 'systems/canvas/FullScreenCanvasSystem';

import WriteTimeSystem from 'systems/WriteTimeSystem';

const mainScene = new Scene([
	// Init systems
	new CreateCanvasSystem(),

	// Reactive systems
	new FullScreenCanvasSystem(),

	// Update systems
	new ClearCanvasSystem(),
	new WriteTimeSystem(),
]);

mainScene.start();

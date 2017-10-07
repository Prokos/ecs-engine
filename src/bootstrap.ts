import { } from './systems/ClearCanvasSystem';
import 'setup';

import Scene from 'core/Scene';

import ClearCanvasSystem from 'systems/ClearCanvasSystem';
import CreateCanvasSystem from 'systems/CreateCanvasSystem';
import FullScreenCanvasSystem from 'systems/FullScreenCanvasSystem';

const mainScene = new Scene([
	new CreateCanvasSystem(),

	new FullScreenCanvasSystem(),

	new ClearCanvasSystem(),
]);

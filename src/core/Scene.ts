import { System, InitSystem, UpdateSystem } from 'core/System';

export default class Scene {
	private initSystems:InitSystem[];
	private updateSystems:InitSystem[];

	constructor(systems:System[]) {
		this.initSystems = systems.find(InitSystem);
		this.updateSystems = systems.find(UpdateSystem);

		this.initSystems.forEach(system => system.run());

		this.update();
	}

	private update():void {
		this.updateSystems.forEach(system => system.run());

		requestAnimationFrame(this.update.bind(this));
	}
};

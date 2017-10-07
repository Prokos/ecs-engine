import { System, InitSystem, ReactiveSystem, UpdateSystem } from 'core/System';
import ReactiveHelper from 'core/ReactiveHelper';

export default class Scene {
	private initSystems:InitSystem[];
	private reactiveSystems:ReactiveSystem[];
	private updateSystems:UpdateSystem[];

	constructor(systems:System[]) {
		this.initSystems = systems.find(InitSystem);
		this.reactiveSystems = systems.find(ReactiveSystem);
		this.updateSystems = systems.find(UpdateSystem);
	}

	public start():void {
		ReactiveHelper.registerSystems(this.reactiveSystems);
		
		this.initSystems.forEach(system => system.run());

		this.update();
	}

	private update():void {
		this.updateSystems.forEach(system => system.run());

		requestAnimationFrame(this.update.bind(this));
	}
};

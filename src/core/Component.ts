import Pool from 'core/Pool';
import { ReactiveSystem, ReactMode } from 'core/System';
import ReactiveHelper from 'core/ReactiveHelper';

abstract class Component {
	static notifiers:any = {}; // @TODO: do normal

	constructor(props:any = {}) {		
		Object.keys(props).forEach((key:any) => {
			const value:any = props[key];

			Object.defineProperty(this, key, {
				value,
				writable: true,
			});
		});

		requestAnimationFrame(() => {
			this.notify(ReactMode.CREATE);
		});

		// @TODO: Let's not do this with proxies, also we're hacking a constructor
		// We should really just use defineProperty to make sure we send ReactMode.UPDATE upon changes

		return ReactiveHelper.proxyComponent(this);
	}

	get name():string {
		return this.constructor.name;
	}

	public static enableNotifier(type:any, mode:ReactMode, system:ReactiveSystem):void {
		if (!this.notifiers[type]) this.notifiers[type] = [];
		if (!this.notifiers[type][mode]) this.notifiers[type][mode] = [];
		if (this.notifiers[type][mode].indexOf(system) !== -1) throw `Attempting duplicate notifier for ${system}`;
		
		this.notifiers[type][mode].push(system);
	}

	public notify(mode:ReactMode):void {
		const prototype:any = this.constructor;

		if (prototype.notifiers[prototype][ReactMode.ALL]) mode = ReactMode.ALL;
		if (!prototype.notifiers[prototype][mode]) return;

		prototype.notifiers[prototype][mode].forEach((system:ReactiveSystem) => {
			// @TODO: should only call once per component type, with all components
			// instead of every time per single component
			system.run([this]);
		});
	}

	public destroy():void {
		Pool.destroyComponent(this);
	}
}

export default Component;

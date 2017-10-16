import { ReactiveSystem, ReactMode } from 'core/System';
import ReactiveHelper from 'core/ReactiveHelper';

abstract class Component {
	static notifiers:any = {}; // @TODO: do normal

	constructor(props:any) {
		const { ...keys } = props;
		
		Object.keys(props).forEach((key:any) => {
			const value:any = props[key];
			Object.defineProperty(this, key, {
				value,
				writable: true,
			});
		});

		requestAnimationFrame(() => {
			this.notify(ReactMode.CREATE)
		});

		// @TODO: Let's not do this with proxies, also we're hacking a constructor
		// We should really just use defineProperty to make sure we send ReactMode.UPDATE upon changes

		return ReactiveHelper.proxyComponent(this);
	}

	get name():string {
		return this.constructor.name;
	}

	public static enableNotifier(mode:ReactMode, system:ReactiveSystem):void {
		if (!this.notifiers[mode]) this.notifiers[mode] = [];
		if (this.notifiers[mode].indexOf(system) !== -1) throw `Attempting duplicate notifier for ${system}`;
		
		this.notifiers[mode].push(system);
	}

	public notify(mode:ReactMode):void {
		const prototype:any = this.constructor;

		if (prototype.notifiers[ReactMode.ALL]) mode = ReactMode.ALL;
		if (!prototype.notifiers[mode]) return;

		prototype.notifiers[mode].forEach((system:ReactiveSystem) => {
			system.run([this]); // todo: should only call once per component type
		});
	}

	public destroy():void {
		// @TODO: put this into a pool so we can re-use it
		// this.notify(ReactMode.DESTROY);
	}
}

export default Component;

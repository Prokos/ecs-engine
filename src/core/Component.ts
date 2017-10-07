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
}

export default Component;

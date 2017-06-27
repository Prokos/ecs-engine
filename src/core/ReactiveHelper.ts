import Component from 'core/Component';
import { ReactiveSystem, ReactMode, IReactiveSetup } from 'core/System';

export default class ReactiveHelper {
	static proxies:any[] = [];

	static registerSystems(systems:ReactiveSystem[]):void {
		systems.forEach((system:ReactiveSystem) => {
			system.listensTo.forEach((listen:IReactiveSetup) => {
				Object.getPrototypeOf(listen.component).enableNotifier(listen.mode, system);
			});
		});
	}

	static proxyComponent(component:any):any {
		if (!ReactiveHelper.proxies[component.name]) {
			ReactiveHelper.proxies[component.name] = new Proxy(component, {
				get: function(target, name) {
					if (!(name in target)) return undefined;
					return target[name];
				},
				set: function(target, name, value) {
					if (!(name in target)) {
						throw `Attempting to set non-existing ${name} on ${target.name}`;
					}

					const currValue = target[name];
					target[name] = value;
					if(currValue === undefined) {
						target.notify(ReactMode.CREATE);
					} else if (value === undefined || value === null) {
						target.notify(ReactMode.DESTROY);
					} else if (value !== currValue) {
						target.notify(ReactMode.UPDATE);
					}

					return true;
				}
			});
		}

		return ReactiveHelper.proxies[component.name];
	}
}
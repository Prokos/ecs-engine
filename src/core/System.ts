import Component from 'core/Component';

export abstract class System {}

export abstract class InitSystem extends System {
	abstract run():void;
}
export abstract class UpdateSystem extends System {
	abstract run():void;
}

export abstract class ReactiveSystem extends System {
	abstract listensTo:IReactiveSetup<any>[];
	abstract run(components:Component[]):void;
}

export enum ReactMode {
	ALL = 0,
	CREATE = 1,
	UPDATE = 2,
	DESTROY = 3,
}

export interface IReactiveSetup<T extends Component> {
	mode: ReactMode,
	components: T[],
}
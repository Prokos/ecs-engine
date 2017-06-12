export abstract class System {
	abstract run():void;
}

export abstract class InitSystem extends System {}
export abstract class UpdateSystem extends System {}

export interface IFlyBehavior {
    fly(): string;
}

class FlyWithWings implements IFlyBehavior {
    fly(): string {
        return "Fly with Wings";
    }
}

class FlyNoWay implements IFlyBehavior {
    fly(): string {
        return "Don't fly";
    }
}
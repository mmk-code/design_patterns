import { printLine } from "./util";

export interface IFlyBehavior {
    fly(): void;
}

export class FlyWithWings implements IFlyBehavior {
    fly(): void {
        printLine("Fly with Wings") ;
    }
}

export class FlyNoWay implements IFlyBehavior {
    fly(): void {
        printLine("Don't fly");
    }
}

export class FlyRocketPowered implements IFlyBehavior {
    fly(): void {
        printLine("I'm flying with Rocket!");
    }

}
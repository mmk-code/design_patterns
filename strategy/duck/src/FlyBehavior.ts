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


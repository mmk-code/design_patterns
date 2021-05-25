import { Duck } from "./Duck";
import { Quack } from "./QuackBehavior";
import { FlyNoWay } from "./FlyBehavior";
import { printLine } from "./util";


export class ModelDuck extends Duck {
    constructor() {
        super(new Quack, new FlyNoWay);
    }

    displayDuck(): void {
        printLine("I'm model Duck!");
    }

}
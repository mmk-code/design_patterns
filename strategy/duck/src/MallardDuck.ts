import { Duck } from "./Duck";
import { Quack } from "./QuackBehavior";
import { FlyWithWings } from "./FlyBehavior";

export class MallardDuck extends Duck {
    constructor() {
        super(new Quack(), new FlyWithWings());
    }
    

    displayDuck() {
        console.log("I'm real Mallard duck.");
    }

}
import { Duck } from "./Duck";
import { FlyRocketPowered } from "./FlyBehavior";
import { MallardDuck } from "./MallardDuck";
import { ModelDuck } from "./ModelDuck";
import { printLine } from "./util";
 
class MiniDuckSimulator {

    static main(): void {
        let mallard: Duck = new MallardDuck();
        mallard.displayDuck();
        mallard.performFly();
        mallard.performQuack();

        printLine("===================");

        // Dynamically assign the fly behaviour
        let model: Duck = new ModelDuck();
        model.displayDuck();
        model.performFly();

        model.setFlyBehavior(new FlyRocketPowered());
        model.performFly();
    }
}

MiniDuckSimulator.main();
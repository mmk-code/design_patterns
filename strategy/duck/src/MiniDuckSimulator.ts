import { Duck } from "./Duck";
import { MallardDuck } from "./MallardDuck";
 
class MiniDuckSimulator {

    static main(): void {
        let mallard: Duck = new MallardDuck();
        mallard.displayDuck();
        mallard.performFly();
        mallard.performQuack();
    }
}

MiniDuckSimulator.main();
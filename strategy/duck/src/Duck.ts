import { IQuackBehavior } from './QuackBehavior';
import { IFlyBehavior } from './FlyBehavior';


export abstract class Duck {
    public quackBehavior: IQuackBehavior;
    public flyBehavior: IFlyBehavior;

    constructor(qb: IQuackBehavior, fb: IFlyBehavior ) {
        this.quackBehavior = qb;
        this.flyBehavior = fb;
    }
    
    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public performFly(): void {
        this.flyBehavior.fly();
    }

    abstract displayDuck(): void;

    // Assign the Behaviors dynamically
    setQuackBehavior(qb: IQuackBehavior): void {
        this.quackBehavior = qb;
    }

    setFlyBehavior(fb: IFlyBehavior): void {
        this.flyBehavior = fb;
    }
}
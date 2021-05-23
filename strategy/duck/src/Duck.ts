import { IQuackBehavior } from './QuackBehavior';
import { IFlyBehavior } from './FlyBehavior';


export class Duck {
    public quackBehavior: IQuackBehavior | undefined;
    public flyBehavior: IFlyBehavior | undefined;

    public performQuack(): void {
        this.quackBehavior.quack();
    }

    public performFly(): void {
        this.flyBehavior.fly();
    }
}
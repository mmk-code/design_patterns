import { printLine } from "./util";

export interface IQuackBehavior {
    quack(): void;
}

export class Quack implements IQuackBehavior {
    quack(): void {
        printLine("Real Duck Sound");
    }
}

export class Squeak implements IQuackBehavior {
    quack(): void {
        printLine("Squeak sound");
    }
}

export class MuteQuack implements IQuackBehavior {
    quack(): void {
        printLine("No sound");
    }
}
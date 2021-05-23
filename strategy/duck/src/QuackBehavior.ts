export interface IQuackBehavior {
    quack(): string;
}

class Quack implements IQuackBehavior {
    quack(): string {
        return "Real Duck Sound ";
    }
}

class Squeak implements IQuackBehavior {
    quack(): string {
        return "Squeak sound ";
    }
}

class MuteQuack implements IQuackBehavior {
    quack(): string {
        return "No sound ";
    }
}
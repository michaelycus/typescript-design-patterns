class Animal {
    public name: string;
    public sound: string = "<Silence>";

    flyingType: Flys = new CantFly();

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        if (this.sound != "<Silence>") {
            return this.sound + ' ' + this.sound + ' ' + this.sound + "!";
        }
        return '...';
    }

    tryToFly() {
        return this.flyingType.fly();
    }

}
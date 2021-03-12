class Dog extends Animal {

    constructor(name: string) {
        super(name);
        this.sound = "Bark";
        this.flyingType = new CantFly();
    }
}
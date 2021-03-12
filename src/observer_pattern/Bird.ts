class Bird extends Animal {

    constructor(name: string) {
        super(name);
        this.sound = "Piuu";
        this.flyingType = new ItFlys();
    }
}
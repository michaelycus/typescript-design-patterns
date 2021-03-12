interface Flys {
    fly(): string
}

class ItFlys implements Flys {
    fly(): string {
        return "Flying High";
    }
}

class CantFly implements Flys {
    fly(): string {
        return "I can't fly";
    }
}
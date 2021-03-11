console.log("=== SINGLETON PATTERN ===");

class User {
    name: string = "Michael";
    age: number = 35;
}

const instance = Singleton.getInstance();
const instance2 = Singleton.getInstance();

const user1 = new User;
const user2 = new User;

console.log("Check if: user1 === user2");
console.log(user1 === user2);

console.log("Check if: instance === instance2");
console.log(instance === instance2);



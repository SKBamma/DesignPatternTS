// Singleton Pattern Example
// 1
class Name {
    static fullname = "Kamal Thapa"
    static greeting() {
        console.log("Hi " + this.fullname)
    }
    nepali() { console.log("K CHA?") }
}

const myMame = new Name()
Name.greeting()
myMame.nepali()

class Singleton {
    static #instance: any;
    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Object("I am an instance");
        }
        return this.#instance;
    }
};
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log("Same instance? " + (instance1 === instance2));


// Factory Pattern Example
type Options = { protein: number; carbs: number; fat: number; };
class Mexican {
    constructor(private options: Options) { }
}
class Indian {
    constructor(private options: Options) { }
}
function createMeal(options: Options) {
    if (options.protein >= 50 && options.fat <= 25) return new Mexican(options);
    if (options.protein >= 30 && options.fat <= 10) return new Indian(options);
};
const meal = createMeal({ protein: 50, carbs: 25, fat: 25 });
console.log(meal);

// Prototype Pattern Example
const obj1 = { name: "Asaad", greet() { console.log(`hello ${this.name}`); } };
const obj2 = Object.create(obj1);
console.log(obj2); // {}
console.log(obj2.__proto__); // obj1 { name: 'Asaad', greet: [Function: greet] }
class Person1 {
    name = 'guest';
    greet() { console.log(`hello ${this.name}`); }
}
const guest = new Person1(); // { name: 'guest' } //whwre is the method
console.log(Person1.prototype.greet.toString()); // greet() { console.log(`hello ${this.name}`); }

// Decorator Pattern Example
type Person = { name: string; };
const person: Person = { name: 'guest' };
function DecorateObj(obj: Person) {
    return {
        ...obj,
        address: 'Fairfield',
        log() { console.log(`User: ${this.name}, ${this.address}`); }
    };
};
const userWithAddress = DecorateObj(person);
console.log(userWithAddress); // { name: 'guest', address: 'Fairfield', log: [Function: log] }

// Observer Pattern Example
class Subject<T> {
    #observers: Function[] = [];
    subscribeMe(callback: Function) {
        this.#observers.push(callback);
    }
    newVideo(msg: T) {
        this.#observers.forEach(function (callback) {
            callback(msg);
        });
    }
}
const subject = new Subject<string>();
subject.subscribeMe((msg: string) => console.log(`Hello! ` + msg));
subject.subscribeMe((msg: string) => console.log(`Bonjour! ` + msg));
subject.newVideo('My new video for design patters in details');
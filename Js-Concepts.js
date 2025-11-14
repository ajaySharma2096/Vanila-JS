// -----------------------------------------Encapsulation---------------------------------------------

class Banking {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
}

const myAccount = new Banking();
myAccount.deposit(100);
myAccount.withdraw(50);
myAccount.withdraw(100);

// -----------------------------------------Abstraction---------------------------------------------

class BrewingCoffee {
  start() {
    this.#boilWater();
    this.#brewCoffee();
    console.log("Coffee is ready!");
  }

  #boilWater() {
    console.log("Boiling water");
  }

  #brewCoffee() {
    console.log("Brewing coffee");
  }
}

const myCoffee = new BrewingCoffee();
myCoffee.start();

// -----------------------------------------Inheritance---------------------------------------------

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} engine started.`);
  }
}

class Car extends Vehicle {
  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

class ElectricCar extends Car {
  charge() {
    console.log(`${this.brand} is charging...`);
  }
}

const tesla = new ElectricCar("Tesla");
tesla.start();
tesla.drive();
tesla.charge();

// -----------------------------------------Polymorphism---------------------------------------------

class Animal {
  speak() {
    console.log("Animal makes some sound...");
  }
}

class Dog extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes the sound`);
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat Meows...");
  }
}

const cat = new Cat();
cat.speak();

const dog = new Dog("Dog");
dog.speak();

// ------------------------------------Singleton Pattern-----------------------------------------

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = "DB Connected Successfully";
    Database.instance = this;
  }
}

const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2);

// ------------------------------------Factory Pattern-----------------------------------------
class MySQLConnection {
  connect() {
    console.log("Connected to MySQL");
  }
}

class MongoConnection {
  connect() {
    console.log("Connected to MongoDB");
  }
}

class DBFactory {
  static createConnection(dbType) {
    if (dbType === "mysql") return new MySQLConnection();
    if (dbType === "mongo") return new MongoConnection();
    throw new Error("Unknown dbType found !!!");
  }
}

const sqlConnection = DBFactory.createConnection("mysql");
const MongoDBConnection = DBFactory.createConnection("mongo");

sqlConnection.connect();
MongoDBConnection.connect();

// --------------------------------------Module Pattern--------------------------------------------

const modulePattern = (function () {
  let count = 0;
  function log(message) {
    console.log(message);
  }

  return {
    increment() {
      count++;
      log(`Count increased to ${count}`);
    },

    decrement() {
      count--;
      log(`Count decreased to ${count}`);
    },

    getCount() {
      return count;
    },
  };
})();

modulePattern.increment();
modulePattern.increment();
console.log(modulePattern.getCount());
modulePattern.decrement();
console.log(modulePattern.getCount());

const configModule = (function () {
  const settings = {
    theme: "dark",
    language: "en",
  };

  return {
    get(key) {
      return settings[key];
    },

    set(key, value) {
      settings[key] = value;
    },
  };
})();

console.log(configModule.get("theme"));
configModule.set("theme", "light");
console.log(configModule.get("theme"));

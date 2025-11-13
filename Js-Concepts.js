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
  speak() {
    console.log("Dog Barks...");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat Meows...");
  }
}

const cat = new Cat();
cat.speak();

const dog = new Dog();
dog.speak();

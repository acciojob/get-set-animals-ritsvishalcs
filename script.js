// Animal class
class Animal {
	constructor(species) {
		this._species = species;
	}
	get species() {
		return this._species;
	}
	makeSound() {
		console.log(`The ${this._species} makes a sound`);
	}
}
// Cat class
class Cat extends Animal {
	purr() {
		console.log("purr");
	}
}
// Dog class
class Dog extends Animal {
	bark() {
		console.log("woof");
	}
}
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

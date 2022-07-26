"use strict";
class People {
    constructor() {
        this.city = "Barrnquilla";
        this.country = "Colombia";
        this.addres = "Cra 55 # 82 - 65";
    }
    helloWorld() {
        console.log("Hello World");
    }
}
class Person extends People {
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showFiles();
    }
    //metodos
    showFiles() {
        console.log(`${this.id}  ${this.name} ${this.dept} ${this.city} ${this.country}`);
    }
}
const personOne = new Person(15, "jesus", "Atlantico");


class persona{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    saludar(){
        return `<h3> Buenas, ${this.name} un gusto conocerte </h3>`
    }
}
let persona1 = new persona('Camilo','19','Male')

console.log(persona1.saludar())
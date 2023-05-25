class Animal {
    constructor(nombre, edad, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }
    hacerSonido() {
        return `${this.sonido}`;
    }
}

class Perro extends Animal {
    constructor(name, edad, sonido, raza) {
        super(name, edad, sonido);
        this.raza = raza;
    }
    moverCola(){
        return `El perro esta moviendo la cola `
    }
}





const formulario = document.getElementById("MyForm");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nombre").value;
    const age = document.getElementById("edad").value;
    const sonido = document.getElementById("sonido").value;

    let Animal1 = new Animal(name, age, sonido);
    let perro1 = new Perro(name, age,sonido);
    document.getElementById("sonidoAnimal").textContent = Animal1.hacerSonido();
    document.getElementById("Cola").textContent = perro1.moverCola();

});
class Persona {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    saludar() {
        return `Buenas ${this.name}, es un placer conocerte.`;
    }
}

class Estudiante extends Persona {
    constructor(name, age, gender, carrera) {
        super(name, age, gender);
        this.carrera = carrera;
    }

    estudiar() {
        return `Eres estudiante de ${this.carrera}.`;
    }
}

const formulario = document.getElementById("MyForm");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nombre").value;
    const age = document.getElementById("edad").value;
    const gender = document.getElementById("sexo").value;
    const carrera = document.getElementById("carrera").value;

    let Usuario = new Estudiante(name, age, gender, carrera);
    document.getElementById("saludo").textContent = Usuario.saludar();
    document.getElementById("info-carrera").textContent = Usuario.estudiar();
});
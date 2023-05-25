class Persona {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    saludar() {
        return `Buenas ${this.name}, es un placer conocerte.`;
    }
    static esMayorDeEdad(age) {
        if (age >= 18 ) {
            return "Eres mayor de edad";
        } else {
            return "No eres mayor de edad"
        }
    }
    get getEdad(){
        return this.age
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
    document.getElementById("mayorEdad").textContent = Persona.esMayorDeEdad(Usuario.getEdad);
    document.getElementById("info-carrera").textContent = Usuario.estudiar();
});
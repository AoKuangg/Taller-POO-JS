class Empleado {
    static id = 0;
    constructor({ nombre, edad, sueldo }) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.id = Empleado.generarIdEmpleado();
    }
    calcularSalarioAnual() {
        this.sueldo = (this.sueldo * 12)
        return `El sueldo Anual es: ${this.sueldo}`;
    }
    static generarIdEmpleado() {
        let cid= ++Empleado.id
        return `El id del empleado: ${cid}`;
    }
}

class Gerente extends Empleado {
    constructor({ nombre, edad, sueldo, departamento }) {
        super({ nombre, edad, sueldo })
        this.departamento = departamento
    }
    calcularSalarioAnualizado() {
        let bono = (this.salario * 0.1)
        this.salario = (this.salario + bono) * 12
        return `El salario del Gerente es: ${this.salario}`
    }
}





let form = document.getElementById('MyForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    let empleado1 = new Empleado(data);
    let gerente1 = new Gerente(data);


    document.getElementById('salarioA').textContent = empleado1.calcularSalarioAnual();
    document.getElementById('salarioB').textContent = gerente1.calcularSalarioAnual();
    document.getElementById('Id').textContent = Empleado.generarIdEmpleado();

})
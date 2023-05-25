class Figura {
    constructor(color) {
        this.color = color;
        this.area;
    }
}


class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    calcularArea() {
        this.area = this.radio*this.radio*3.1416
        return `El area del circulo es: ${this.area}`
    }

}

class Rectangulo extends Figura {
    constructor(color,largo,ancho){
        super(color);
        this.ancho = ancho;
        this.largo = largo;
    }
    calcularArea(){
        this.area = this.ancho*this.ancho
        return `EL area del rectangulo es: ${this.area}`
    }
}



const formulario = document.getElementById("MyForm");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const color = document.getElementById("color").value;
    const radio = document.getElementById("radio").value;
    const largo = document.getElementById("largo").value;
    const ancho = document.getElementById("ancho").value;

    let circulo1 = new Circulo(color,radio);
    let rectangulo1 = new Rectangulo(color,largo,ancho);

        document.getElementById("calcularCirc").textContent = circulo1.calcularArea();
        document.getElementById("calcularRect").textContent = rectangulo1.calcularArea();
    


});
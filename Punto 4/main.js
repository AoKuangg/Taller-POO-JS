class Vehiculo {
    constructor({marca,modelo,velocidad}) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar(){
        this.velocidad = this.velocidad+10
        return `${this.velocidad}`;
    }

    static convertirKmHEnMph(velocidad){
        let millasHora = (velocidad/1.60934)
        return ` La velocidad es: ${millasHora} en millas por hora`
    }
    get getKmH(){
        return this.velocidad
    }
}


class Coche extends Vehiculo {
    constructor({marca,modelo,velocidad,combustible}) {
        super({marca,modelo,velocidad})
        this.combustible = this.combustible
    }
    acelerar(){
        this.velocidad = this.velocidad+20
        return `${this.velocidad}`;
    }
}





let form = document.getElementById('MyForm');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    let vehiculo1 = new Vehiculo(data);
    let coche1 = new Coche(data);

    document.getElementById('acelerar').textContent = vehiculo1.acelerar();
    document.getElementById('Acoche').textContent = coche1.acelerar();
    document.getElementById('kmh').textContent = Vehiculo.convertirKmHEnMph(vehiculo1.getKmH);

})
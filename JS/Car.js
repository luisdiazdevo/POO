class Car {

    constructor(license, driver, passanger){
        this.id;
        this.license = license;
        this.driver = driver;
        this.passanger = passanger;
    }

    printDataCar(){
        document.getElementById("name").innerHTML="Nombre: "+this.driver.name
        document.getElementById("document").innerHTML="Tu Documento que subiste: "+this.driver.document
        document.getElementById("passangers").innerHTML="Maximo de pasajeros: "+this.passanger
        document.getElementById("matricula").innerHTML="Matricula del auto: "+this.license
    }

}
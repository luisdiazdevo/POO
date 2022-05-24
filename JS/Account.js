class Account {

    constructor(name, document){
        this.id;
        this.name = name;
        this.document = document;
        this.email;
        this.password;
    }


    printDataCar() {
        document.getElementById("name").innerHTML="Nombre: "+this.driver.name
        document.getElementById("document").innerHTML="Tu Documento que subiste: "+this.driver.document
        document.getElementById("passangers").innerHTML="Maximo de pasajeros: "+this.passanger
        document.getElementById("matricula").innerHTML="Matricula del auto: "+this.license
    }

}

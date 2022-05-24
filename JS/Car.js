function Car (license, driver, passanger){
    this.id;
    this.license = license;
    this.driver = driver;
    this.passanger = passanger;
}

Car.prototype.printDataCar = function () {
    console.log(this.driver)
    console.log(this.driver.name)
    console.log(this.driver.document)
    console.log(this.passanger)
    console.log(this.license)
    document.getElementById("name").innerHTML="Nombre: "+this.driver.name
    document.getElementById("document").innerHTML="Tu Documento que subiste: "+this.driver.document
    document.getElementById("passangers").innerHTML="Maximo de pasajeros: "+this.passanger
    document.getElementById("matricula").innerHTML="Matricula del auto: "+this.license

}
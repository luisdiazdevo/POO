package Java;

class Car {
    Integer id;
    String licence;
    Account driver;
    Integer passegenger;

    public Car(String licence, Account driver){

    }

    void printDataCar(){
        System.out.println("Licencia: " + licence );
        System.out.println("Conductor: " + driver );
        System.out.println("Pasajeros: " + passegenger );
    }
}

package Java;

class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");

        Car car = new Car();
        car.licence = "D15ATG";
        car.driver = "Luis Antonio";
        car.passegenger = 4;
        car.printDataCar();
       
        
        Car car2 = new Car();
        car2.licence = "ALV4512";
        car2.driver = "Amparo Luciano";
        car2.passegenger = 4;
        car.printDataCar();
       
    }
}
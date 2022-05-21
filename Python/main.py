from car import Car

if __name__ == "__main__":
    print("Hola")
    car = Car()
    car.license = "D15ATG"
    car.driver = "Luis Antonio"
    print(vars(car))

    car2 = Car()
    car2.license = "ALV1919"
    car2.driver = "Amparo Luciano"
    print(vars(car2))

    

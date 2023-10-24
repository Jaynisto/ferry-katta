class Car {
    constructor(color, passengerCount){
        this.storedColor = color;
        this.passengerCounter= passengerCount;
    }

    get getColor(){
        return this.storedColor;
    }

    get getPassengerAmount(){
        return this.passengerCounter;
    }
} 


class Ferry {
    constructor(amountOfCars, amountOfPeople){
        this.amountOfCars = amountOfCars;
        this.amountOfPeople = amountOfPeople;
        this.peopleCount = 0;
        this.carCount = 0;
    }

    board(car){
        if (this.carCount < this.amountOfCars && this.peopleCount + car.getPassengerAmount <= this.amountOfPeople){
            this.carCount++;
            this.peopleCount += car.getPassengerAmount
            return "Accepted!"
        }else{
            return "Rejected!"
        }
    }
}


const myCar = new Car("Red", 4)
const myFerry = new Ferry(5, 20);

const result  = myFerry.board(myCar)

console.log(`Car color: ${myCar.getColor}`);
console.log(`Car passenger count: ${myCar.getPassengerAmount}`);
  
console.log(`Boarding status: ${result}`);



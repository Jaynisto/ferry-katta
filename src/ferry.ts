import { Car } from "../src/car";

export class Ferry {
    private storedAmountOfCars : number;
    private storedAmountOfPeople : number;
    public peopleCount : number;
    public carCount : number;
    constructor(amountOfCars : number, amountOfPeople : number){
        this.storedAmountOfCars = amountOfCars;
        this.storedAmountOfPeople = amountOfPeople;
        this.peopleCount = 0;
        this.carCount = 0;
    }

    board(car : Car):string {
        if (this.carCount < this.storedAmountOfCars && this.peopleCount + car.getPassengerAmount <= this.storedAmountOfPeople){
            this.carCount++;
            this.peopleCount += car.getPassengerAmount
            return "Accepted!"
        }else{
            return "Rejected!"
        }
    }
}
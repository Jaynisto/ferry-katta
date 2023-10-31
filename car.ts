export class Car {

    private storedColor : string;
    private storedPassengers : number;
    public trip : number;

    constructor(color : string, passengerCount : number){
        this.storedColor = color;
        this.storedPassengers = passengerCount;
        /*Trip counter*/
        this.trip = 0;
    }

    get getColor(){
        return this.storedColor;
    }

    get getPassengerAmount(){
        return this.storedPassengers;
    }

    /* Function to check if the car gets a discount or goes free */

    checkDiscount(){
        if (this.trip === 7){
            this.trip = 0;
            return "You Go Free!";
        }else if (this.trip >= 3){
            return "Half Price!";
        }
        return "";
    }
}



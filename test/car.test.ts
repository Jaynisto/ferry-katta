import { expect }  from 'chai';
import { Car } from '../car'; // Replace 'your-code-file.js' with the actual file path.

describe('Car Class Check.', () => {
    it('should return the car color', () => {
        const myCar = new Car("Red", 6);
        expect(myCar.getColor).to.equal("Red");
    });

    it('should return the passenger count', () => {
        const myCar = new Car("Blue", 4);
        expect(myCar.getPassengerAmount).to.equal(4);
    });
    
    it('should calculate discounts correctly', () => {
        const myCar = new Car("Green", 6);
        // Test for no discount
        expect(myCar.checkDiscount()).to.equal(""); 
    
        // Test for half price after 3 trips
        myCar.trip = 3;
        expect(myCar.checkDiscount()).to.equal("Half Price!"); 
    
        // Test for going free after 7 trips
        myCar.trip = 7;
        expect(myCar.checkDiscount()).to.equal("You Go Free!"); 
    });
});
  
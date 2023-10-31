import { expect }  from 'chai';
import { Car } from '../car';
import { Ferry } from '../ferry';

describe('Ferry Class Test', () => {
    it('should board a car and return "Accepted"', () => {
        const myCar = new Car("Red", 4)
        const myFerry = new Ferry(5, 3);
        const result  = myFerry.board(myCar)
      expect(result).to.equal("Rejected!"); // Use expect
    });
  
    it('should reject boarding when full', () => {
      const myFerry = new Ferry(1, 1);
      const car1 = new Car("Red", 1);
      const car2 = new Car("Blue", 1);
      myFerry.board(car1);
      const result = myFerry.board(car2);
      expect(result).to.equal("Rejected!"); // Use expect
    });
});
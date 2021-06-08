import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BarBurger1';

public numOfBurger =1 ;
public numOfCheese =1 ;
public numOfTomato =1 ;
public numOfLettuce =1 ;
private maxNum = 4;
private minNum = 0;

public priceOfOneBurger = 14;
public priceOfOneCheese = 3;

public priceOfOneTomato = 2;
public priceOfOneLettuce = 2;


public calculatePrice():number {

let sum = (this.numOfBurger*this.priceOfOneBurger) + (this.numOfCheese*this.priceOfOneCheese) +(this.numOfTomato*this.priceOfOneTomato) +(this.numOfLettuce*this.priceOfOneLettuce);
return sum;

}

public burgerUp() {
  if(this.numOfBurger<this.maxNum) {
    this.numOfBurger ++;
  }
}

public burgerDown() {
  if(this.numOfBurger> 1) {
  this.numOfBurger --;
  }
}
  public cheeseUp() {
    if(this.numOfCheese < this.maxNum) {
    this.numOfCheese ++;
    }
  }

   public cheeseDown() {
    if(this.numOfCheese > this.minNum) {
      this.numOfCheese --;
    }
      }

   public lettuceUp() {
    if(this.numOfLettuce < this.maxNum) {

        this.numOfLettuce ++;
        }
      }

        public lettuceDown() {
          if(this.numOfLettuce > this.minNum) {
          this.numOfLettuce --;
          }
        }

          public tomatoUp() {
            if(this.numOfTomato < this.maxNum) {
            this.numOfTomato ++;
            }
          }

            public tomatoDown() {
              if(this.numOfTomato > this.minNum) {
              this.numOfTomato --;
              }
            }
}


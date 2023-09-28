import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public name:string = "Akanksha"
  public username:string = "Akanksha"
  public number1: number = 0;
  public number2: number = 0;

  calculateAddition(): void {
    const addition= this.number1 + this.number2;
    alert(`The addition of ${this.number1} and ${this.number2} is ${addition}`);
  }

  calculateSubstraction(): void {
    const substraction = this.number1 - this.number2;
    alert(`The substraction of ${this.number1} and ${this.number2} is ${substraction}`);
  }

  calculateMultiplication(): void {
    const multiplication = this.number1 * this.number2;
    alert(`The multiplication of ${this.number1} and ${this.number2} is ${multiplication}`);
  }

  calculateDivision(): void {
    const division = this.number1 / this.number2;
    alert(`The division of ${this.number1} and ${this.number2} is ${division}`);
  }
}

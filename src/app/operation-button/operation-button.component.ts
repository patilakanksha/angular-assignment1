import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.scss']
})
export class OperationButtonComponent {
  @Input() number1: number | undefined;
  @Input() number2: number | undefined;
  @Output() dataEmitter: EventEmitter<number> = new EventEmitter();
  
  calculateAddition(): void {
    if (this.number1 !== undefined && this.number2 !== undefined){
      const result= this.number1 + this.number2;
      alert(`The addition of ${this.number1} and ${this.number2} is ${result}`);
      this.dataEmitter.emit(result);
    }else{
      console.log("error")
    }
    
  }

  calculateSubstraction(): void {
    if (this.number1 !== undefined && this.number2 !== undefined){
      const substraction = this.number1 - this.number2;
      alert(`The substraction of ${this.number1} and ${this.number2} is ${substraction}`);
    }else{
      console.log("error")
    }
    
  }

  calculateMultiplication(): void {
    if (this.number1 !== undefined && this.number2 !== undefined){
      const multiplication = this.number1 * this.number2;
    alert(`The multiplication of ${this.number1} and ${this.number2} is ${multiplication}`);
    }else{
      console.log("error")
    }
    
  }

  calculateDivision(): void {
    if (this.number1 !== undefined && this.number2 !== undefined){
    const division = this.number1 / this.number2;
    alert(`The division of ${this.number1} and ${this.number2} is ${division}`);
  }
  else{
    console.log("error")
  }
}
}

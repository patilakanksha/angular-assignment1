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
  public result:number=0
  handleDataFromOperationButton(result:number){
    this.result=result;
  }
  
}

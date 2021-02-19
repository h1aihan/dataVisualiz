import { Component, OnInit, OnChanges, AfterViewInit, } from '@angular/core';
import anime from 'animejs/lib/anime.es';
@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit{

  constructor() { }

  inputValue = '';
  numInput: string;
  stack : (string|number)[]  = [1 , 2 , 3] ;

  ngOnInit(): void {
  }

  onKey(event: any) :void { 
    this.inputValue = event.target.value;
  }

  onClickPush(): void {
    if (!this.inputValue){
      return;
    }
    this.stack.push(this.inputValue);
    this.inputValue = "";
    this.numInput = "";
  }

  onClickPop(): void{
    this.stack.pop();
  }


}

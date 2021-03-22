import { Component, OnInit, OnDestroy } from '@angular/core';
import { QueueService } from '../../services/queue.service';
@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  inputValue = '';
  numInput: string;
  constructor(public queue: QueueService) {
    this.queue.push(1);
    this.queue.push(2);
    this.queue.push(3);
  }

  ngOnInit(): void {

  }

  onKey(event: any): void {
    this.inputValue = event.target.value;
  }

  onClickPush(): void {
    if (!this.inputValue){
      return;
    }
    this.queue.push(this.inputValue);
    this.inputValue = '';
    this.numInput = '';
  }

  onClickPop(): void{
    this.queue.popleft();
  }
  ngOnDestroy(): void {
    this.queue.clear();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  first: Node;
  last: Node;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
   }

  clear(): void{
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(data: any) {
    const node = new Node(data);

    if (!this.first){
      this.first = node;
      this.last = node;
    }

    else{
      const temp = this.last;
      temp.next = node;
      this.last = node;
    }
    this.length ++;
  }

  popleft(): any{
    let data = null;
    if (!this.first){
      return;
    }
    if (this.length === 1){
      data = this.first;
      this.first = null;
      this.last = null;
    }
    else{
      data = this.first;
      this.first = this.first.next;
    }
    this.length --;
    return data.data;
  }

  [Symbol.iterator](){
    let current = this.first;
    return {
      next(){
        if (current){
          const data = current.data;
          current = current.next;
          return {value: data, done: false};
        }
        return {done: true};
      }
    };
  }
}

class Node {
  data: any;
  next: any;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

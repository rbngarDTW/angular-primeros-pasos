import { Component } from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `<h1>Hola Counter</h1>
             <h3>Counter {{ counter }}</h3>
             <button (click)="increaseBy(1)">+1</button>
             <button (click)="resetCounter()"> Reset </button>
             <button button (click)="increaseBy(-1)">-1</button>`
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h1> Hello {{parentData}} </h1>
  <button (click)="fireEvent()">Sent Event</button>
  `
})
export class ChildComponent {

  @Input() public parentData;

  @Output() public childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('This is simple Text from Child to Parent ');
  }

}

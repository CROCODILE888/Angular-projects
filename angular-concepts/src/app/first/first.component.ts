import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>UserName: {{name}} <span>//To demonstrate communication between components // INPUT()</span></p>
<button class="btn" (click)="addItem()">Add</button>
  `,
  styles: ``
})
export class FirstComponent {
  user = "Taha";
  @Input() name='';
  @Output() addNewItem = new EventEmitter<string>();
  addItem(){
    this.addNewItem.emit('T')
  }
}

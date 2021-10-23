import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

@Output() sendTodoItem = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

selectTodoItem(todoItem: any){
console.log(todoItem)
this.sendTodoItem.emit(todoItem)

  }

}

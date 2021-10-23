import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-todo-list',
  templateUrl: './view-todo-list.component.html',
  styleUrls: ['./view-todo-list.component.css']
})
export class ViewTodoListComponent implements OnInit {



@Input() todoItems : any;
  constructor() { }

  ngOnInit(): void {
  }

  hello(){
    console.log(this.todoItems.map((item: any)=> {
       console.log(`Iam ${item}`)
    } ))
  }

  deleteItem(i :any){
    this.todoItems.splice(this.todoItems.indexOf(5),1)
    console.log(this.todoItems)
  }

  completeItem(element: any, i: any){
    console.log(element.textContent)
    if(element.textContent==="Complete"){
      element.textContent= "Undo"
      this.todoItems[i].done = true

    }else {
      element.textContent="Complete"
      this.todoItems[i].done = false

    }
   
  }
}

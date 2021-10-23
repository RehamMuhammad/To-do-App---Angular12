import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
todoList : Array<{name: string; done: boolean}> = []


  constructor() { }

  ngOnInit(): void {
  }


  receiveTodoItem(todo: any){
    console.log("FROM PARENT",todo)
    this.todoList.push(todo)
    console.log(this.todoList)
  }


}

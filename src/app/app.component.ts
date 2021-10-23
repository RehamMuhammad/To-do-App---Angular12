import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-list';
  list : any[] = [];


  addTask(task : string){
    this.list.push({id:this.list.length, name:task})
    console.warn(this.list)
     
  }
}

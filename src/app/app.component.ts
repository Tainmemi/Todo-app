import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-task';
  newTask: string;
  taskErrorMessage = false;
  tasks = [];
  i: number;

  addTask(){
    if(this.newTask){
      this.tasks.push(this.newTask);
      this.taskErrorMessage = false;
      this.newTask = '';
      
    }
    else{
      this.taskErrorMessage = true;
    }
  }
  
  deleteTask(i){
    this.tasks.splice(i,1);
  }

}

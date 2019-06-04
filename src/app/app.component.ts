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
  delTask: string;
  i: number;
  finTask = false;

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
  
  deleteTask(){
    this.tasks.splice(this.i,1);
  }

  finishTask(){
    
  }
}

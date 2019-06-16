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
  isEdit = false;
  index: number;

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
  
  deleteTask(i) {
    this.tasks.splice(i,1);
  }

  editTask(task, i) {
    this.newTask = task;
    this.isEdit = true;
    this.index = i;
  }

  saveTask() {
    this.tasks[this.index] = this.newTask;
    this.newTask = '';
    this.isEdit = false;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
      this.newTask = ''; // Limpiar el input
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1); // Eliminar tarea por índice
  }
}

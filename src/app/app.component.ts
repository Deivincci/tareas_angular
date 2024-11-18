import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],  // Agrega FormsModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat_angular';
  taskName: string = ''; // Define taskName para eliminar errores de referencia
  tasks: Task[] = [

  ];

  addTask() {
    if (this.taskName.trim()) {
      const newTask: Task = {
        id: Date.now(),
        name: this.taskName,
        completed: false,
      };
      this.tasks.push(newTask);
      this.taskName = ''; // Resetear el input de tarea
    }
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  toggleComplete(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
    }
  }
}

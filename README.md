Objetivo: Crear una lista de tareas con angular donde podremos añadir y eliminar tareas (ejercicio sencillo inicial)

TRABAJAREMOS CON VSCODE
PARA ELLO NECESITAMOS LA EXTENSION
ANGULAR SCHEMATICS
LOS SIGUIENTES PASOS SE PUEDEN HACER DESDE ANGULAR SCHEMATICS,SON MAS FAN DE TERMINAL,ASI QUE CASI TODO SE HACE POR TERMINAL
O EDITANDO ARCHIVOS CON VSCODE POR EJEMPLO

Paso 1: Crear el Proyecto

CHAT_ANGULAR_VSCODE ES EL NOMBRE DEL PROYECTO

ng new chat_angular_vscode

AHORA TE HACE 2 PREGUNTAS,SINO QUEREMOS ALGO MAS AVANZADO NOS SIRVE LA OPCION CSS POR DEFECTO,ASI QUE BASTA CON PULSAR ENTER

AHORA TE PREGUNTA SI QUIERES DE FORMA ANONIMA COMPARTIR TU PROYECTO CON GOOGLE O ANGULAR

RESPONDEMOS N Y PULSAMOS ENTER

------------------------------------------------------------------------------------------------------------------------------------------------------

cd chat_angular_vscode

------------------------------------------------------------------------------------------------------------------------------------------------------

LO SIGUIENTE ES INSTALAR LAS VARIABLES DE ENTORNO

ng generate environments

VUELVE A PREGUNTAR SI QUIERES DE FORMA ANONIMA COMPARTIR TU PROYECTO CON GOOGLE O ANGULAR

RESPONDEMOS N Y PULSAMOS ENTER

------------------------------------------------------------------------------------------------------------------------------------------------------

AHORA CREAMOS EL COMPONENTE,EN ESTE CASO UNA LISTA DE TAREAS

ng generate component task-list

------------------------------------------------------------------------------------------------------------------------------------------------------

AHORA TENDREMOS QUE ACCEDER A LA CARPETA QUE SE HA CREADO PARA MODIFICAR

chat_angular_vscode\src\app\task-list

------------------------------------------------------------------------------------------------------------------------------------------------------

EDITAMOS EL ARCHIVO task-list.component.ts

REEMPLAZAMOS LO QUE EXISTA POR LO SIGUIENTE (ESTO ES UN EJEMPLO) PARA OTRAS APPS SERIA OTRO CODIGO

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

------------------------------------------------------------------------------------------------------------------------------------------------------

SEGUIMOS,AHORA MODIFICAMOS task-list.component.html EN LA MISMA CARPETA

REEMPLAZAMOS CON EL SIGUIENTE CODIGO

<!-- task-list.component.html -->
<div class="container">
    <h1>Lista de Tareas</h1>
  
    <!-- Aquí muestra la lista de tareas -->
    <ul>
      <li *ngFor="let tarea of tasks">
        {{ tarea }}
        <button (click)="removeTask(i)">Eliminar</button>
      </li>
    </ul>
  
    <!-- Formulario para agregar tarea -->
    <input type="text" [(ngModel)]="newTask" placeholder="Agregar tarea" />
    <button (click)="addTask()">Agregar</button>
  </div>
  
------------------------------------------------------------------------------------------------------------------------------------------------------

AHORA RETROCEDEMOS UNA CARPETA

TENEMOS QUE ESTAR EN chat_angular_vscode\src\app

AHORA MODIFICAMOS app.component.html

AÑADIMOS AL FINAL

<div style="text-align:center">
  <h1>{{ title }}</h1>
  <h2>Lista de Tareas</h2>

  <input
    [(ngModel)]="taskName"
    placeholder="Añadir tarea"
    (keyup.enter)="addTask()"
  />
  <button (click)="addTask()">Agregar</button>

  <!-- Lista de tareas -->
  <ul>
    <li *ngFor="let task of tasks">
      <span [class.completed]="task.completed" (click)="toggleComplete(task.id)">
        {{ task.name }}
      </span>
      <button (click)="removeTask(task.id)">Eliminar</button>
    </li>
  </ul>

------------------------------------------------------------------------------------------------------------------------------------------------------

AHORA MODIFICAMOS app.component.ts

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

------------------------------------------------------------------------------------------------------------------------------------------------------

AHORA MODIFICAMOS app.module.ts SINO EXISTE LO CREAMOS

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';  // Si estás usando este componente

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent  // Asegúrate de declarar todos los componentes aquí
  ],
  imports: [
    BrowserModule,
    FormsModule  // Asegúrate de agregar FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

------------------------------------------------------------------------------------------------------------------------------------------------------

CON TODAS ESTAS MODIFICACIONES SOLO HEMOS DE INICIAR EL SERVER

ng serve (Esto iniciara el servidor)

http://localhost:4200 (Esta direccion en un navegador nos mostrara la app en funcionamiento)



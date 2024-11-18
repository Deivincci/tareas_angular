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



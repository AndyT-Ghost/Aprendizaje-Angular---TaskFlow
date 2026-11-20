import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  @Output() tareaAgregada = new EventEmitter<any>();
  titulo = '';
  descripcion = '';
  prioridad = 'Media';
  fechaLimite = '';


  agregarTarea(){
    if(this.titulo.trim() === '' || this.descripcion.trim() === '' || this.fechaLimite === ''){
      alert('Por favor, complete todos los campos antes de agregar la tarea.');
      return;
    }

    const nuevaTarea = {
      id: 0,
      titulo:this.titulo,
      descripcion: this.descripcion,
      completada: false,
      prioridad: this.prioridad,
      fechaLimite: this.fechaLimite
    };

    this.tareaAgregada.emit(nuevaTarea);

    this.titulo = '';
    this.descripcion = '';
    this.prioridad = 'Media';
    this.fechaLimite = '';

    console.log('Tarea agregada: ', nuevaTarea);
  }
}

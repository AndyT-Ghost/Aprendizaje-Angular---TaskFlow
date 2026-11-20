import { Component, ViewChild } from "@angular/core";
import { Header } from "./components/header/header";
import { TaskList} from "./components/task-list/task-list";
import { Footer } from "./components/footer/footer";
import { TaskForm } from "./components/task-form/task-form";
import { TaskService } from "./services/task.service";

interface Tarea{
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  prioridad: string;
  fechaLimite: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, TaskList, Footer, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App{  
@ViewChild('listaTareas') listaTareas!: TaskList;

  constructor(private taskService: TaskService){}

  /*tareas: Tarea[] = [
    {id: 1, titulo: 'Tarea 1', descripcion: 'Descripción de la tarea 1', completada: false, prioridad: 'Alta', fechaLimite: '2026-06-30'},
    {id: 2, titulo: 'Tarea 2', descripcion: 'Descripción de la tarea 2', completada: true, prioridad: 'Media', fechaLimite: '2026-11-15'},
    {id: 3, titulo: 'Tarea 3', descripcion: 'Descripción de la tarea 3', completada: false, prioridad: 'Alta', fechaLimite: '2026-08-01'},
    {id: 4, titulo: 'Tarea 4', descripcion: 'Descripción de la tarea 4', completada: true, prioridad: 'Alta', fechaLimite: '2026-06-30'},
    {id: 5, titulo: 'Tarea 5', descripcion: 'Descripción de la tarea 5', completada: false, prioridad: 'Media', fechaLimite: '2026-07-15'},
    {id: 6, titulo: 'Tarea 6', descripcion: 'Descripción de la tarea 6', completada: true, prioridad: 'Baja', fechaLimite: '2026-08-29'},
    {id: 7, titulo: 'Tarea 7', descripcion: 'Descripción de la tarea 7', completada: false, prioridad: 'Alta', fechaLimite: '2026-11-30'}
  ];

  guardarTareas(nuevaTarea: Tarea){
    this.tareas = [...this.tareas, nuevaTarea]
  }*/

  guardarTareas(nuevaTarea: Tarea){
    this.taskService.crearTarea(nuevaTarea).subscribe({
      next: (tareaCreada) =>{
        console.log('Tarea guardada', tareaCreada);
        this.listaTareas.cargarTareas();
      },
      error: (error) => {
        console.error('Error al guardar la tarea', error);
      }
    });
  }
}

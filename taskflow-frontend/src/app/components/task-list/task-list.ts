import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

interface Tarea{
  id: number,
  titulo: string,
  descripcion: string,
  completada: boolean,
  prioridad: string,
  fechaLimite: string 
}

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})

export class TaskList implements OnInit {
  tareas: Tarea[] = [];
  mostrarMensaje = true;

  constructor(
    private taskService: TaskService,
    private changeDetector: ChangeDetectorRef
  ){}

  ngOnInit(){
      this.cargarTareas();
  }

  cargarTareas(){
    this.taskService.obtenerTareas().subscribe({
      next: (datos: Tarea[]) => {
        this.tareas = datos;
        this.changeDetector.detectChanges();
      },
      error: (error) => console.error('No se pudieron cargar las tareas', error)
    });
  }

  alternarMensaje(){
    this.mostrarMensaje = !this.mostrarMensaje;
  }

  cambiarEstado(tarea: Tarea){
    tarea.completada = !tarea.completada;
  }

  obtenerEstadoFecha(fechaLimite: string): boolean{
    const fecha = new Date(fechaLimite);
    const hoy = new Date();

    fecha.setHours(0, 0, 0, 0);
    hoy.setHours(0, 0, 0, 0);

    return fecha > hoy ? true : false;
  }
}



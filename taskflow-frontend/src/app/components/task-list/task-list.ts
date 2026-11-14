import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

export class TaskList {
  @Input() tareas: Tarea[] = [];

  mostrarMensaje = true;

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

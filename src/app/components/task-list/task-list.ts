import { Component } from '@angular/core';
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
  mostrarMensaje = true;

  tareas: Tarea[] = [
    {id: 1, titulo: 'Tarea 1', descripcion: 'Descripción de la tarea 1', completada: false, prioridad: 'Alta', fechaLimite: '2026-06-30'},
    {id: 2, titulo: 'Tarea 2', descripcion: 'Descripción de la tarea 2', completada: true, prioridad: 'Media', fechaLimite: '2026-11-15'},
    {id: 3, titulo: 'Tarea 3', descripcion: 'Descripción de la tarea 3', completada: false, prioridad: 'Alta', fechaLimite: '2026-08-01'},
    {id: 4, titulo: 'Tarea 4', descripcion: 'Descripción de la tarea 4', completada: true, prioridad: 'Alta', fechaLimite: '2026-06-30'},
    {id: 5, titulo: 'Tarea 5', descripcion: 'Descripción de la tarea 5', completada: false, prioridad: 'Media', fechaLimite: '2026-07-15'},
    {id: 6, titulo: 'Tarea 6', descripcion: 'Descripción de la tarea 6', completada: true, prioridad: 'Baja', fechaLimite: '2026-08-29'},
    {id: 7, titulo: 'Tarea 7', descripcion: 'Descripción de la tarea 7', completada: false, prioridad: 'Alta', fechaLimite: '2026-11-30'}
  ];

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

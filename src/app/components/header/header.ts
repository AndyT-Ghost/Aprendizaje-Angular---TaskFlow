import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = 'TaskFlow';
  descripcion = 'Sistema web de gestión de tareas'
  curso = 'Desarrollo de aplicaciones web avanzado'

}

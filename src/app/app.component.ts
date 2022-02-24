import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

import {empleados} from './listaDeEmpleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Empleados';

  lista=empleados;

  agregarEmpleadoEvent(nuevoEmpleado:Empleado){
    this.lista.push(nuevoEmpleado);
  }
}

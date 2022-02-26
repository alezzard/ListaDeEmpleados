import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioListaDeEmpleadosService } from './services/servicio-lista-de-empleados.service';



// import {empleados} from './listaDeEmpleados';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Empleados';

  lista:Empleado[]=this.miListaEmpleados.listaDeEmpleados;
  
  constructor(private miListaEmpleados:ServicioListaDeEmpleadosService){}

 

  agregarEmpleadoEvent(nuevoEmpleado:Empleado){
    this.miListaEmpleados.agregarEmpleadoService(nuevoEmpleado);
  }

}



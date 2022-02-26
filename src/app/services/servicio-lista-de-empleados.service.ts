import { Injectable } from '@angular/core';
import { Empleado } from '../empleado.model';
import { empleados } from '../listaDeEmpleados';



@Injectable({
  providedIn: 'root'
})
export class ServicioListaDeEmpleadosService {

  listaDeEmpleados:Empleado[]=empleados;

  agregarEmpleadoService(nuevoEmpleado:Empleado){
    this.listaDeEmpleados.push(nuevoEmpleado);
  }

  constructor() { }
}

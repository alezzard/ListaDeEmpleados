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

  editarEmpleadoService(empleado:Empleado,indice:number){
    this.listaDeEmpleados.splice(indice,1,empleado)
  }
  eliminarEmpleadoService(indice:number){
    this.listaDeEmpleados.splice(indice,1)
  }



  constructor() { }
}

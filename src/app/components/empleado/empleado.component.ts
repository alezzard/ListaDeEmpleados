import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from 'src/app/services/servicio-empleados.service';
import { ServicioListaDeEmpleadosService } from 'src/app/services/servicio-lista-de-empleados.service';
import { Empleado } from '../../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  
  constructor(private mensajeService:ServicioEmpleadosService) { }
  
  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;

  @Output() empleadoEvent = new EventEmitter<Empleado>();

  nuevoEmpleado(){
    let nuevoEmpleado= new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleadoEvent.emit(nuevoEmpleado);
    console.log(this.empleadoEvent);
    this.mensajeService.mostrarMensaje(this.nombre+" "+this.apellido+" se registró con éxito!");
  }



  ngOnInit(): void {
  }

}

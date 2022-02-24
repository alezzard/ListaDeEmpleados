import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from '../../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;

  @Output() empleadoEvent = new EventEmitter<Empleado>();

  nuevoEmpleado(){
    let nuevoEmpleado= new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleadoEvent.emit(nuevoEmpleado);
    console.log(this.empleadoEvent);
    alert("Nuevo Empleado creado!!");
  }


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../empleado.model';
import { ServicioListaDeEmpleadosService } from '../../services/servicio-lista-de-empleados.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  titulo = 'Lista de Empleados';

  lista:Empleado[]=[];
  
  constructor(private miListaEmpleados:ServicioListaDeEmpleadosService,private router:Router){}

  ngOnInit(): void {
    this.lista=this.miListaEmpleados.listaDeEmpleados;
  }
  agregarEmpleadoEvent(nuevoEmpleado:Empleado){
    this.miListaEmpleados.agregarEmpleadoService(nuevoEmpleado);
    this.alInicio()
  }

  alInicio(){
    this.router.navigate([""])
  }

}

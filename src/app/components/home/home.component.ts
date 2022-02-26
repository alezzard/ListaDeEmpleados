import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../empleado.model';
import { ServicioListaDeEmpleadosService } from '../../services/servicio-lista-de-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo = 'Lista de Empleados';

  lista:Empleado[]=[];
  
  constructor(private miListaEmpleados:ServicioListaDeEmpleadosService){}

  agregarEmpleadoEvent(nuevoEmpleado:Empleado){
    this.miListaEmpleados.agregarEmpleadoService(nuevoEmpleado);
  }


  ngOnInit(): void {
    this.lista=this.miListaEmpleados.listaDeEmpleados;
  }
}

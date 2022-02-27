import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { Empleado } from '../../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioListaDeEmpleadosService } from '../../services/servicio-lista-de-empleados.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;

  indice:number=this.route.snapshot.params["indice"];

  empleadoAEditar:Empleado=this.lista.listaDeEmpleados[this.indice]
  
  @Output() empleadoEvent = new EventEmitter<Empleado>();

  constructor(private lista:ServicioListaDeEmpleadosService,private router:Router,private route:ActivatedRoute) { }

  editarEmpleado(){
    let empleadoEditado= new Empleado(this.nombre,this.apellido,this.cargo,this.salario)
    this.lista.editarEmpleadoService(empleadoEditado,this.indice);
    this.router.navigate([""])
  }

  ngOnInit(): void {
    
    this.nombre=this.empleadoAEditar.nombre;
    this.apellido=this.empleadoAEditar.apellido;
    this.cargo=this.empleadoAEditar.cargo;
    this.salario=this.empleadoAEditar.salario;
    alert("indice"+this.indice);
  }

}

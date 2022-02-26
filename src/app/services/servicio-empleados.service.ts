import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }

  constructor() { }
}

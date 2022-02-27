import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ServicioEmpleadosService } from './services/servicio-empleados.service';
import { ServicioListaDeEmpleadosService } from './services/servicio-lista-de-empleados.service';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';

const appRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"proyectos",component:ProyectosComponent},
  {path:"quienes",component:QuienesSomosComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"editar/:indice",component:EditarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService,
    ServicioListaDeEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importar 
import { ReactiveFormsModule } from '@angular/forms';
//importar para unir backend y frontend
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarComentarioComponent,
    NavbarComponent,
    ListComentariosComponent,
    VerComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importar
    ReactiveFormsModule,
    //backend
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

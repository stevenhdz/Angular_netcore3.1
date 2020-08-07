import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-comentarios',
  templateUrl: './ver-comentarios.component.html',
  styleUrls: ['./ver-comentarios.component.css']
})
export class VerComentariosComponent implements OnInit {
  //variables
loading = true;
comentario: Comentario;
idComentario: number;

  constructor(private comentarioService: ComentarioService, private route: ActivatedRoute) { 
    this.idComentario= +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarComentario();
  }

  cargarComentario(){
    this.loading = true;
    this.comentarioService.cargarComentario(this.idComentario).subscribe(data =>{
      this.loading = false;
      this.comentario = data;
    })
  }

}

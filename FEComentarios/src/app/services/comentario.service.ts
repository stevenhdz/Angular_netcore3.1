import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
    myAppUrl = 'https://localhost:5001/';
    myApiUrl = 'api/comentario/';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    //creacion de metodos post... etc
  constructor(private http: HttpClient) { }
    getListComentario(): Observable<Comentario[]> {
      return this.http.get<Comentario[]>(this.myAppUrl + this.myApiUrl);
    }

    deleteComentario(id: number): Observable<Comentario> {
      return this.http.delete<Comentario>(this.myAppUrl + this.myApiUrl + id);
    }

    guardarComentario(comentario: Comentario): Observable<Comentario> {
      return this.http.post<Comentario>(this.myAppUrl + this.myApiUrl, comentario, this.httpOptions);
    }

    cargarComentario(id: number): Observable<Comentario>{
      return this.http.get<Comentario>(this.myAppUrl + this.myApiUrl + id);
    }

    actualizarComentario(id: number, comentario: Comentario): Observable<Comentario>{
      return this.http.put<Comentario>(this.myAppUrl + this.myApiUrl + id, comentario, this.httpOptions);
    }
}

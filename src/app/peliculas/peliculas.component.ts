import { Component } from '@angular/core';
import { PELICULAS } from './mock-peliculas';
import { Pelicula } from '../pelicula';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  
  peliculas: any = [];
  actor: any = [];

  constructor(public servicio: ImdbService){}

  mostrarPeliculas(){
    
    let input: any = document.getElementById('buscador');
    let url: string = "https://imdb-api.com/en/API/SearchMovie/k_okgurmip/" + input.value;
    
    
    //this.servicio.getLista(url).subscribe(peliculas => this.peliculas = peliculas);
    this.servicio.getLista(url).subscribe(peliculas => {
      this.peliculas = peliculas;
      console.log(peliculas);
    });
    
  }

  actores(id: number){
    
    let url: string = "https://imdb-api.com/en/API/FullCast/k_okgurmip/" + id;

    //this.servicio.getLista(url).subscribe(actor => this.actor = actor);
    this.servicio.getLista(url).subscribe(actor => {
      this.actor = actor;
      console.log(actor);
    });
  }
  

  limpiar(){    
   this.peliculas = [];
  }
}

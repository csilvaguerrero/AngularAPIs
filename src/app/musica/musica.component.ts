import { Component } from '@angular/core';
import { JamendoService } from '../jamendo.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {

  musica: any = [];

  constructor(public servicio: JamendoService){}


  listarMusica(){
    
    let input: any = document.getElementById('musica')
    let url = "https://api.jamendo.com/v3.0/albums/?client_id=2a8b17ae&artist=" + input.value;

    this.servicio.getMusica(url).subscribe(musica => {
      this.musica = musica;
      console.log(musica);
    });
    
  }

}

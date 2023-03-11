import { Component } from '@angular/core';
import { WikipediaService } from '../wikipedia.service';


@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent {

  wiki: any = []

  constructor(public servicio: WikipediaService){}


  buscarWiki(){

    let input: any = document.getElementById('buscarWiki')

    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input.value + "&callback=JSONP_CALLBACK";

    this.servicio.getWiki(url).subscribe(wiki => {
      this.wiki = wiki;
      console.log(wiki);
    });


  }


}

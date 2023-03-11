import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CreditosComponent } from './creditos/creditos.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { MusicaComponent } from './musica/musica.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';

const rutas: Routes = [

  { path: 'creditos', component: CreditosComponent },
  { path: 'favoritas', component: FavoritasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'wikipedia', component: WikipediaComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

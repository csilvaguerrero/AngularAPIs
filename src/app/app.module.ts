import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { CreditosComponent } from './creditos/creditos.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MusicaComponent } from './musica/musica.component';
import { WikipediaComponent } from './wikipedia/wikipedia.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PeliculasComponent,
    FavoritasComponent,
    CreditosComponent,
    MusicaComponent,
    WikipediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

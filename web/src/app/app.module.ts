import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MessageComponent} from './utilidades/message/message.component';
import {FilmesModule} from './filmes/filmes.module';
import {GenerosModule} from './generos/generos.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MessageComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FilmesModule,
    GenerosModule,
  ],
})
export class AppModule {
}

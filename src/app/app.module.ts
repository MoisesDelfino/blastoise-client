import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TrainerModule } from './screens/trainer/trainer.module';
import { PokemonModule } from './screens/pokemon/pokemon.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    TrainerModule,
    PokemonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

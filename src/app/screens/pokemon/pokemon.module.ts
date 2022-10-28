import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select2Module } from 'ng-select2-component';
import { PokemonComponent } from './pages/pokemon.component';

@NgModule({
  declarations: [PokemonComponent],
  imports: [FormsModule, CommonModule, Select2Module],
})
export class PokemonModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pages/pokemon.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
  declarations: [PokemonComponent],
  imports: [FormsModule, CommonModule, MultiSelectAllModule],
})
export class PokemonModule {}

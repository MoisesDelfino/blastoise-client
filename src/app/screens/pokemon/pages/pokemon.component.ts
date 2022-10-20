import { Component, OnInit } from '@angular/core';
import { Ipokemon } from '../pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  public pokemon = {} as Ipokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  salvarController() {
    this.pokemonService.salvarService(this.pokemon).then((res) => {
      this.pokemon = {} as Ipokemon;
    });
  }
}

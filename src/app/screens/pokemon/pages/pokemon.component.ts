import { Component, OnInit } from '@angular/core';
import { Ipokemon, ITipoPokemon, ITrainer } from '../pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  public pokemon = {} as Ipokemon;
  public trainers = {} as ITrainer;
  public tipo = {} as ITipoPokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.buscarTreinadores();
    this.buscaTipoPokemons();
    this.pokemon.genero = "";
    this.pokemon.treinador = 0;
    this.pokemon.tiposPokemonList = [0];
  }

  salvarController() {
    this.pokemonService.salvarService(this.pokemon).then((res) => {
      console.log(`Pokemon ${res?.nome} cadastrado com sucesso.`);
      this.pokemon = {} as Ipokemon;
    });
  }

  buscarTreinadores() {
    this.pokemonService.listarTrainerService().then(res => {
      this.trainers = res;
    });
  }

  buscaTipoPokemons() {
    this.pokemonService.listarTipoService().then((res) => {
      this.tipo = res;
    });
  }

}

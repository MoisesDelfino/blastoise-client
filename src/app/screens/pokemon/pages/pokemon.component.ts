import { Component, OnInit } from '@angular/core';
import { Ipokemon, ITipoPokemon, ITrainer } from '../pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  public pokemon = {} as Ipokemon;
  public trainers = {} as ITrainer;
  public tipo = {} as ITipoPokemon;

  constructor(private pokemonService: PokemonService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buscarTreinadores();
    this.buscaTipoPokemons();
    this.pokemon.genero = "";
    this.pokemon.treinador = 0;
    this.pokemon.tiposPokemonList = [0];
  }

  salvarController() {
    this.pokemonService.salvarService(this.pokemon).then((res) => {
      this.toastr.success('Pokemon cadastrado!', 'Sucesso!');
      this.pokemon = {} as Ipokemon;
    }).catch(error => {
      this.toastr.error('Não foi possível cadastrar o pokemon. Erro: ' + error, 'Erro')
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

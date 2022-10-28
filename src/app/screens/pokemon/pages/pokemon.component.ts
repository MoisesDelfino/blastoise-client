import { Component, OnInit } from '@angular/core';
import { Ipokemon, ITrainer } from '../pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  public pokemon = {} as Ipokemon;
  public trainers = {} as ITrainer;
  public trainer = this.trainers.conteudo;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.buscarTreinadores();
  }

  salvarController() {
    this.pokemonService.salvarService(this.pokemon).then((res) => {
      this.pokemon = {} as Ipokemon;
    });
  }

  buscarTreinadores() {
    this.pokemonService.listarTrainerService().then(res => {
      this.trainers = res;
    })
  }

}

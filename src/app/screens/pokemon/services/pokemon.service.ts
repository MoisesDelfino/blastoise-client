import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipokemon } from '../pokemon.model';
import { TrainerDetalhado } from '../../trainer/trainer.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  salvarService(pokemon: Ipokemon): Promise<Ipokemon | any> {
    return this.httpClient
      .post<Ipokemon>(
        `http://localhost:8080/api/treinador/${pokemon.treinador}/pokemon/`,
        pokemon
      )
      .toPromise();
  }

  listarTrainerService():Promise<any> {
    return this.httpClient.get<TrainerDetalhado>(`http://localhost:8080/api/treinador/?status=A`).toPromise();
  }

  listarTipoService():Promise<any> {
    return this.httpClient.get<TrainerDetalhado>(`http://localhost:8080/api/tipo/`).toPromise();
  }
}

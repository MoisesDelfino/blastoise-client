import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Ipokemon } from '../pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private httpClient: HttpClient) {}

  salvarService(pokemon: Ipokemon): Promise<Ipokemon | any> {
    return this.httpClient
      .post<Ipokemon>(
        'http://localhost:8080/api/treinador/${idTreinador}/pokemon/',
        pokemon
      )
      .toPromise();
  }
}

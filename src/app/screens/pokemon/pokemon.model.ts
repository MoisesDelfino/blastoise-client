export interface Ipokemon {
  id?: number;
  nome?: string;
  ataque: number;
  defesa: number;
  saude: number;
  velocidade: number;
  genero: string;
  treinador: number;
  tiposPokemonList: [
    id: number
  ];
}

export interface Ipokemons {
  conteudo: [
    {
      id?: number;
      nome?: string;
      ataque: number;
      defesa: number;
      saude: number;
      velocidade: number;
      genero: string;
      treinador: number;
      tipo: [
        {
          id?: number;
        }
      ]
    }
  ]
}

export interface ITipoPokemon {
  conteudo: [
    {
      id: number,
      nome: string
    }
  ]
}

export interface ITrainer {
  conteudo: [
    {
      id: number,
      nome: string
    }
  ]
}
export interface Ipokemon {
  nome?: string;
  ataque: number;
  defesa: number;
  saude: number;
  velocidade: number;
  genero: string;
}

export interface ITrainer {
  conteudo: [
    {
      id: number,
      nome: string
    }
  ]
}
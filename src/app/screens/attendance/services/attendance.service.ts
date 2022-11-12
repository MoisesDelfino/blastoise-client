import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TrainerDetalhado } from "../../trainer/trainer.model";
import { Ipokemon } from "../../pokemon/pokemon.model";
import { IAttendance } from "../attendance.model";


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  constructor(private httpClient: HttpClient) { }

  listarTrainerService():Promise<any> {
    return this.httpClient.get<TrainerDetalhado>(`http://localhost:8080/api/treinador/?status=A`).toPromise();
  }

  listarPokemonsService(id : number):Promise<Ipokemon | any> {
    return this.httpClient.get<Ipokemon>(`http://localhost:8080/api/treinador/${id}`).toPromise();
  }

  salvarService(attendance: IAttendance): Promise<IAttendance | any>{
    return this.httpClient.post<IAttendance>(
      `http://localhost:8080/api/atendimento/${attendance.pokemon}`, attendance
    )
    .toPromise();
  }
}
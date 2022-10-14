import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { TrainerDetalhado } from "../trainer.model";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private httpClient: HttpClient) { }

  salvarService(trainer: TrainerDetalhado): Promise<TrainerDetalhado | any> {
    return this.httpClient.post<TrainerDetalhado>('http://localhost:8080/api/trainer/', trainer).toPromise();
  }
}
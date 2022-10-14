import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../../services/trainer.service';
import { TrainerDetalhado } from '../../trainer.model';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  trainer = {} as TrainerDetalhado;

  constructor(private trainerService: TrainerService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarController() {
    this.trainerService.salvarService(this.trainer)
    .then(result => {
      console.log(`Treinador ${result?.nome} cadastrado com sucesso.`);
      this.trainer = {} as TrainerDetalhado;

      //COLOCAR AQUI A NAVEGAÇÃO PARA A LISTA this.router.navigate(['trainer/list']);
    })
  }

}

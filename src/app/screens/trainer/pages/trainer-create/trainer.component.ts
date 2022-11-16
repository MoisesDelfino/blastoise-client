import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../../services/trainer.service';
import { TrainerDetalhado } from '../../trainer.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
})
export class TrainerComponent implements OnInit {
  trainer = {} as TrainerDetalhado;

  constructor(private trainerService: TrainerService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.trainer.classificacao = 0;
    this.trainer.genero = 0;
  }

  salvarController() {
    this.trainerService.salvarService(this.trainer).then((result) => {
      this.toastr.success('Treinador cadastrado!', 'Sucesso!');
      this.trainer = {} as TrainerDetalhado;
    }).catch(error => {
      this.toastr.error('Não foi possível cadastrar o treinador. Erro: ' + error, 'Erro')
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Ipokemon, Ipokemons, ITrainer } from 'src/app/screens/pokemon/pokemon.model';
import { IAttendance } from '../../attendance.model';
import { AttendanceService } from '../../services/attendance.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {
  public attendance = {} as IAttendance;
  public trainers = {} as ITrainer;
  public pokemon = {} as Ipokemons;
  public pokemons = this.pokemon.conteudo;

  constructor(private attendanceService: AttendanceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.buscarTreinadores();
    this.attendance.treinador = 0;
    this.attendance.pokemon = 0;
    this.attendance.urgencia = 0;
  }

  salvarController() {
    this.attendanceService.salvarService(this.attendance).then((res) => {
      this.toastr.success('Atendimento cadastrado!', 'Sucesso!');
      this.attendance = {} as IAttendance;
    }).catch(error => {
      this.toastr.error('Não foi possível cadastrar o atendimento. Erro: ' + error, 'Erro')
    });
  }

  buscarTreinadores() {
    this.attendanceService.listarTrainerService().then(res => {
      this.trainers = res;
    })
  }

  buscaPokemons($event: number) {
    this.attendanceService.listarPokemonsService($event).then((res) => {
      this.attendance.treinador = $event;
      this.pokemons = res.pokemons;
    });
  }
}

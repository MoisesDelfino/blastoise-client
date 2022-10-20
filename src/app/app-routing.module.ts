import { NgModule, Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TrainerComponent } from './screens/trainer/pages/trainer-create/trainer.component';
import { AttendanceComponent } from './screens/attendance/pages/attendance-create/attendance.component';
import { QueueComponent } from './screens/queue/queue.component';
import { PokemonComponent } from './screens/pokemon/pages/pokemon.component';
import { RecordsComponent } from './screens/records/records.component';

const routes: Routes = [
  {
    path: 'trainer',
    component: TrainerComponent,
  },

  { path: 'attendance', component: AttendanceComponent },

  { path: 'queue', component: QueueComponent },

  { path: 'pokemon', component: PokemonComponent },

  { path: 'records', component: RecordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

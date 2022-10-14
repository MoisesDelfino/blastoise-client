import { NgModule, Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { TrainerComponent } from './screens/trainer/pages/trainer-create/trainer.component';

const routes: Routes = [{
     path: 'trainer', component: TrainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
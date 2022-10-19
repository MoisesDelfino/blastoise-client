import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { TrainerComponent } from "./pages/trainer-create/trainer.component";

@NgModule({
  declarations: [
    TrainerComponent
  ],
  imports: [
    FormsModule
  ]
})
export class TrainerModule { }
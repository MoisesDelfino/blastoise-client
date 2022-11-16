import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AttendanceComponent } from "./pages/attendance-create/attendance.component";
import { ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
  declarations: [AttendanceComponent],
  imports: [FormsModule, CommonModule, ToastNoAnimationModule.forRoot()]
})
export class AttendanceModule {}
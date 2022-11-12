import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Select2Module } from "ng-select2-component";
import { AttendanceComponent } from "./pages/attendance-create/attendance.component";

@NgModule({
  declarations: [AttendanceComponent],
  imports: [FormsModule, CommonModule, Select2Module]
})
export class AttendanceModule {}
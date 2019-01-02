import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerComponent } from './date-time-picker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbDatepickerModule,
    FormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  declarations: [
    DateTimePickerComponent
  ],
  exports: [DateTimePickerComponent],
  providers: []
})
export class DateTimePickerModule { }

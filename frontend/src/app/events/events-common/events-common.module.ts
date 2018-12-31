import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCommonService } from './events-common.service';
import { HttpClientModule } from '@angular/common/http';
import { EventListComponent } from './events-list/events-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [EventListComponent],
  exports: [EventListComponent],
  providers: [EventCommonService]
})
export class EventCommonModule { }

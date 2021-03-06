import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventCommonModule } from '../events-common/events-common.module';
import { EventAdminService } from './events-admin.service';
import { HttpClientModule } from '@angular/common/http';
import { EventAdminComponent } from './events-admin-main/events-admin-main.component';
import { EventAdminRoutingModule } from './events-admin-routing.module';
import { NgbModalModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EventModalComponent } from './events-modal/events-modal.component';
import { DateTimePickerModule } from '../../date-time-picker/date-time-picker.module';
import { MemberCommonModule } from '../../member/member-common/member-common.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    NgbDatepickerModule,
    EventCommonModule,
    EventAdminRoutingModule,
    MemberCommonModule,
    DateTimePickerModule,
  ],
  declarations: [EventAdminComponent, EventModalComponent],
  providers: [EventAdminService],
  entryComponents: [EventModalComponent]
})
export class EventAdminModule { }

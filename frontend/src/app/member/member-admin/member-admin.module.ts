import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCommonModule } from '../member-common/member-common.module';
import { MemberAdminService } from './member-admin.service';
import { HttpClientModule } from '@angular/common/http';
import { MemberAdminComponent } from './member-admin-main/member-admin-main.component';
import { MemberAdminRoutingModule } from './member-admin-routing.module';
import { MemberModalComponent } from './member-modal/member-modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    MemberCommonModule,
    MemberAdminRoutingModule
  ],
  declarations: [MemberListComponent, MemberAdminComponent, MemberModalComponent],
  exports: [MemberListComponent],
  providers: [MemberAdminService],
  entryComponents: [MemberModalComponent]
})
export class MemberAdminModule { }

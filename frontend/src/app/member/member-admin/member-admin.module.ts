import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCommonModule } from '../member-common/member-common.module';
import { MemberAdminService } from './member-admin.service';
import { HttpClientModule } from '@angular/common/http';
import { MemberAdminDashboardComponent } from './member-admin-dashboard/member-admin-dashboard.component';
import { MemberAdminRoutingModule } from './member-admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MemberCommonModule,
    HttpClientModule,
    MemberAdminRoutingModule
  ],
  declarations: [MemberListComponent, MemberAdminDashboardComponent],
  exports: [MemberListComponent],
  providers: [MemberAdminService]
})
export class MemberAdminModule { }

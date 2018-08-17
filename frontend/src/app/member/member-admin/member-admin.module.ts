import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCommonModule } from '../member-common/member-common.module';
import { MemberAdminService } from './member-admin.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MemberCommonModule,
    HttpClientModule
  ],
  declarations: [MemberListComponent],
  exports: [MemberListComponent],
  providers: [MemberAdminService]
})
export class MemberAdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCommonService } from './member-common.service';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member-list/member-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [MemberListComponent],
  exports: [MemberListComponent],
  providers: [MemberCommonService]
})
export class MemberCommonModule { }

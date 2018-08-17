import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCommonService } from './member-common.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [MemberCommonService]
})
export class MemberCommonModule { }

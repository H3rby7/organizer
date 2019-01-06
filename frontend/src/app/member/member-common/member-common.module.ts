import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCommonService } from './member-common.service';
import { HttpClientModule } from '@angular/common/http';
import { MemberListComponent } from './member-list/member-list.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberTypeaheadComponent } from './member-typeahead/member-typeahead.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbTypeaheadModule,
    FormsModule,
  ],
  declarations: [MemberListComponent, MemberTypeaheadComponent],
  exports: [MemberListComponent, MemberTypeaheadComponent],
  providers: [MemberCommonService]
})
export class MemberCommonModule { }

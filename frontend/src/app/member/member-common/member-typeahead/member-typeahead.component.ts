import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';
import { Member } from '../../../../../../shared/model/member';
import { MemberCommonService } from '../member-common.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

let allMembers: Member[] = [];

let count = 1;
const IDENTIFIER = 'membertypeahead';

const MEMBER_TYPEAHEAD_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MemberTypeaheadComponent),
  multi: true
};

@Component({
  selector: 'app-member-typeahead',
  templateUrl: './member-typeahead.component.html',
  styleUrls: ['./member-typeahead.component.scss'],
  providers: [MEMBER_TYPEAHEAD_VALUE_ACCESSOR],
})
export class MemberTypeaheadComponent implements OnInit, ControlValueAccessor {

  @Input()
  id = IDENTIFIER + (count++);

  @Input()
  name = this.id;

  required = true;
  disabled = false;

  changeFn = (e) => { };
  touchFn = (e) => { };
  validatorFn = (e) => { };

  member: Member;
  memberId: string = 'testmember1';

  constructor(private readonly memberService: MemberCommonService) {

  }

  ngOnInit() {
    this.memberService.getAll()
      .then(res => {
        allMembers = res;
        this.setMemberFromList();
      })
      .catch(err => console.log(err));
  }

  search(text$: Observable<string>) {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : allMembers.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
          .slice(0, 10))
    )
  }

  formatter(result: Member) {
    return result.name;
  }

  modelChange() {
    if (!this.member && this.memberId) {
      this.memberId = undefined;
      this.changeFn(undefined);
      return;
    }
    if (this.member && this.memberId || !this.member) {
      return;
    }
    this.memberId = this.member._id;
    this.changeFn(this.memberId);
  }

  /* Interface implementations to use as form component */

  writeValue(memberId: string): void {
    this.memberId = memberId;
    this.setMemberFromList();
  }

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.touchFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setMemberFromList() {
    if (!this.memberId) return;
    this.member = allMembers.find(e => e._id === this.memberId);
  }

}

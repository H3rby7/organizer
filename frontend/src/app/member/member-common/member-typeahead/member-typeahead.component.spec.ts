import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTypeaheadComponent } from './member-typeahead.component';
import { FormsModule } from '@angular/forms';
import { MemberCommonService } from '../member-common.service';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Member Typeahead', () => {
  let component: MemberTypeaheadComponent;
  let fixture: ComponentFixture<MemberTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, NgbTypeaheadModule, HttpClientTestingModule],
      providers: [MemberCommonService],
      declarations: [MemberTypeaheadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

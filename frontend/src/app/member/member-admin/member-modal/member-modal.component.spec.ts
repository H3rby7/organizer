import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberModalComponent } from './member-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MemberAdminService } from '../member-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AddMemberModalComponent', () => {
  let component: MemberModalComponent;
  let fixture: ComponentFixture<MemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [NgbActiveModal, MemberAdminService],
      declarations: [MemberModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

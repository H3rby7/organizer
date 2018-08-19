import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAdminComponent } from './member-admin-main.component';
import { MemberAdminService } from '../member-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MemberCommonModule } from '../../member-common/member-common.module';

describe('MemberAdminDashboardComponent', () => {
  let component: MemberAdminComponent;
  let fixture: ComponentFixture<MemberAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, MemberCommonModule],
      providers: [MemberAdminService],
      declarations: [ MemberAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

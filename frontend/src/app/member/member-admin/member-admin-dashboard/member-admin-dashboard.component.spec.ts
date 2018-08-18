import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAdminDashboardComponent } from './member-admin-dashboard.component';
import { MemberListComponent } from '../member-list/member-list.component';
import { MemberAdminService } from '../member-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MemberAdminDashboardComponent', () => {
  let component: MemberAdminDashboardComponent;
  let fixture: ComponentFixture<MemberAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MemberAdminService],
      declarations: [ MemberAdminDashboardComponent, MemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

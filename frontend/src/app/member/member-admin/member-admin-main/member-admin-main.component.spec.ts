import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAdminComponent } from './member-admin-main.component';
import { MemberListComponent } from '../member-list/member-list.component';
import { MemberAdminService } from '../member-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('MemberAdminDashboardComponent', () => {
  let component: MemberAdminComponent;
  let fixture: ComponentFixture<MemberAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      providers: [MemberAdminService],
      declarations: [ MemberAdminComponent, MemberListComponent ]
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

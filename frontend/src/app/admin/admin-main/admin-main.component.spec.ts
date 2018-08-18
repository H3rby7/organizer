import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainComponent } from './admin-main.component';
import { AdminRoutingModule } from '../admin-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberAdminModule } from '../../member/member-admin/member-admin.module';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

describe('AdminMainComponent', () => {
  let component: AdminMainComponent;
  let fixture: ComponentFixture<AdminMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminRoutingModule, RouterTestingModule, NgbTabsetModule, MemberAdminModule],
      declarations: [AdminMainComponent, AdminDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminRoutingModule } from '../admin-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberAdminModule } from '../../member/member-admin/member-admin.module';
import { RouterModule } from '@angular/router';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminRoutingModule, RouterTestingModule, NgbTabsetModule, MemberAdminModule],
      declarations: [AdminDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

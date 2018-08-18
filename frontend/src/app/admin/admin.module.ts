import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MemberAdminModule } from '../member/member-admin/member-admin.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    // angular
    CommonModule,
    RouterModule,
    // 3rd party
    NgbTabsetModule,
    // custom
    AdminRoutingModule,
    MemberAdminModule,
  ],
  declarations: [AdminDashboardComponent]
})
export class AdminModule { }

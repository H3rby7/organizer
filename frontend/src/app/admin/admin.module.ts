import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MemberAdminModule } from '../member/member-admin/member-admin.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MemberAdminModule
  ],
  declarations: [AdminDashboardComponent]
})
export class AdminModule { }

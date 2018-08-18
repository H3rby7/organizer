import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAdminDashboardComponent } from './member-admin-dashboard/member-admin-dashboard.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  {
    path: '',
    component: MemberAdminDashboardComponent,
  },
  {
    path: 'list',
    component: MemberListComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberAdminRoutingModule { }

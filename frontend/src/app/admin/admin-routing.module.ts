import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MemberAdminComponent } from '../member/member-admin/member-admin-main/member-admin-main.component';
import { AdminMainComponent } from './admin-main/admin-main.component';

const routes: Routes = [
  {
    path: '',
    component: AdminMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'member',
        component: MemberAdminComponent
      },
      {
        path: 'dashboard',
        component: AdminDashboardComponent
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAdminComponent } from './member-admin-main/member-admin-main.component';

const routes: Routes = [
  {
    path: '',
    component: MemberAdminComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberAdminRoutingModule { }

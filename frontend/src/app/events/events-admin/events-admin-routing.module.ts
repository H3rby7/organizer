import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventAdminComponent } from './events-admin-main/events-admin-main.component';

const routes: Routes = [
  {
    path: '',
    component: EventAdminComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminRoutingModule { }

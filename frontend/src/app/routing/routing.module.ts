import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment.prod';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: environment.debugRouter})],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }

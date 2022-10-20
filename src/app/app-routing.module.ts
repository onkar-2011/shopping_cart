import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorRouteComponent } from './pages/error-route/error-route.component';


const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  { path: 'auth', loadChildren: ()=> import('./login/auth/auth.module').then((m)=>m.AuthModule) },
  { path: 'dashboard', loadChildren: ()=> import('./dashboard/dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  { path: 'shared', loadChildren: ()=> import('./shared/shared/shared.module').then((m)=>m.SharedModule)}
   //{ path: '**', component:ErrorRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

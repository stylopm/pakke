import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'panel',
    loadChildren: () =>
      import('@pages/panel/panel.module').then(
        (m) => m.PanelModule
      ),
  },
  {
    path: 'registre',
    loadChildren: () =>
      import('@pages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/administration',
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
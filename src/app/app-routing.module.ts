import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: () => import('@features/top/top.module').then(m => m.TopModule)
  },
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRoutingModule } from './top-routing.module';
import { TopPage } from './pages/top/top.page';


@NgModule({
  declarations: [
    TopPage
  ],
  imports: [
    CommonModule,
    TopRoutingModule,
  ]
})
export class TopModule { }

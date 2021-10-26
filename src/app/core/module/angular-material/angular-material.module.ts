import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    MatToolbar,
  ],
  exports: [
    MatDialogModule,
    MatToolbar,
  ]
})
export class AngularMaterialModule { }

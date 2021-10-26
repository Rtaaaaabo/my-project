import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '@core/module/angular-material/angular-material.module';
import { CommonCustomModule } from '@core/module/common-custom/common-custom.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CommonCustomModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoModifyComponent } from './photo-modify/photo-modify.component';
import { AngularCropperjsModule } from 'angular-cropperjs';

@NgModule({
  declarations: [
    AppComponent,
    PhotoModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCropperjsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

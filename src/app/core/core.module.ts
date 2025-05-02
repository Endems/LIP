import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    // BrowserModule,
    SharedModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    HomeComponent,
  ]
})
export class CoreModule {}

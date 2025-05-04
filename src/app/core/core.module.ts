import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HeroComponent } from './home/sections/hero/hero.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent
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

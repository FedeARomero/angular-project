import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './pages/angular/angular.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AngularComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }

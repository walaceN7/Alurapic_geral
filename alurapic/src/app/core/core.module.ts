import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponenet } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ HeaderComponenet ],
  exports: [ HeaderComponenet ]
})
export class CoreModule { }

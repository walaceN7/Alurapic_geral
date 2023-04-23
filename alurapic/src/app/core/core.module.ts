import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponenet } from './header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ HeaderComponenet ],
  exports: [ HeaderComponenet ]
})
export class CoreModule { }

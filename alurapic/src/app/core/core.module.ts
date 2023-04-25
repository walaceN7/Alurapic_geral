import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponenet } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ HeaderComponenet ],
  exports: [ HeaderComponenet ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }

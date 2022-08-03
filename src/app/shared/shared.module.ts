import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loding-spinner/loding-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlertComponent, LoadingSpinnerComponent, DropdownDirective],

  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'load', component: LoadingSpinnerComponent },
    ]),
  ],

  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    CommonModule,
  ],
})
export class SharedModule {}

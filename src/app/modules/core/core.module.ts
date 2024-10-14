import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterPageComponent },
    ]),
  ],
})
export class CoreModule {}

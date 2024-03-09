import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [LoginPageComponent],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { ConversionsPageComponent } from './conversions-page/conversions-page.component';
import { DatePageComponent } from './date-page/date-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { NameModalComponent } from './welcome-page/components/name-modal/name-modal.component';
import { NavLinkComponent } from './layout/components/nav-link/nav-link.component';
import { PagesLayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LogoutModalComponent } from './layout/components/logout-modal/logout-modal.component';

@NgModule({
  declarations: [
    ConversionsPageComponent,
    DatePageComponent,
    FormPageComponent,
    NameModalComponent,
    NavLinkComponent,
    PagesLayoutComponent,
    WelcomePageComponent,
    LogoutModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PagesModule {}

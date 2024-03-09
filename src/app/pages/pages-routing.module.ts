import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ConversionsPageComponent } from './conversions-page/conversions-page.component';
import { DatePageComponent } from './date-page/date-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { PagesLayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: PagesLayoutComponent,
    children: [
      { path: 'bienvenido', component: WelcomePageComponent },
      { path: 'conversiones', component: ConversionsPageComponent },
      { path: 'calcula-fecha', component: DatePageComponent },
      { path: 'formulario', component: FormPageComponent },
      { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    redirectTo: 'bienvenido',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

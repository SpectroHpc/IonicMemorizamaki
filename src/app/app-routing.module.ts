import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { HiraganaComponent } from './Components/Temas/hiragana/hiragana.component';
import { KatakanaComponent } from './Components/Temas/katakana/katakana.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full',

  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  { path: 'Register',
    component: RegisterComponent
  },
  {
    path: 'Hiragana',
    component: HiraganaComponent
  },
  {
    path: 'Katakana',
    component: KatakanaComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule {}

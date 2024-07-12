import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormEstabComponent } from './pages/formEstab/formEstabelecimento.component';

const routes: Routes = [
  {
    path:'login',
    component: HeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'createAcount',
    component: FormEstabComponent,
    pathMatch: 'full'
  },
  {
    path:'',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

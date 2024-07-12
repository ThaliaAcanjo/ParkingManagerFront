//AQUI VAI TODOS OS COMPONENTS USADOS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu-sidebar/menu.component';
import { LoginComponent } from './components/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
import { CardInfoComponenet } from './components/cardInfo/cardinfo.component';
import { VagasComponent } from './components/vagas/vagas.component';
import { VagaComponent } from './components/vagas/vaga/vaga.component';
import { EstabelecimentoFormComponent } from './pages/formEstab/formEstabelecimento.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    HeroComponent,
    CardInfoComponenet,
    VagasComponent,
    VagaComponent,
    EstabelecimentoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

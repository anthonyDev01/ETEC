import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViagemComponent } from './viagem/viagem.component';
import { MinhasViagensComponent } from './minhas-viagens/minhas-viagens.component';
import { CadastroViagensComponent } from './cadastro-viagens/cadastro-viagens.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ApagarViagemComponent } from './apagar-viagem/apagar-viagem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViagemComponent,
    MinhasViagensComponent,
    CadastroViagensComponent,
    DetalhesViagemComponent,
    ApagarViagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

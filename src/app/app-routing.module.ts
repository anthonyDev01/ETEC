import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinhasViagensComponent } from './minhas-viagens/minhas-viagens.component';
import { CadastroViagensComponent } from './cadastro-viagens/cadastro-viagens.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ApagarViagemComponent } from './apagar-viagem/apagar-viagem.component';

const routes: Routes = [
  { path: '', component: MinhasViagensComponent },
  { path: 'cadastro', component: CadastroViagensComponent },
  { path: 'detalhes', component: DetalhesViagemComponent },
  { path: 'apagar', component: ApagarViagemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

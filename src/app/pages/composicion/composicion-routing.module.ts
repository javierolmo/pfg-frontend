import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposicionComponent } from './composicion.component';

const routes: Routes = [
  {
    path: '',
    component: ComposicionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComposicionRoutingModule { }

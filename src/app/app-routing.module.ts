import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"pagina1", loadComponent:()=>import('./pages/pagina1/pagina1.component').then(m=>m.Pagina1Component)},
  {path:"pagina2", loadComponent:()=>import('./pages/pagina2/pagina2.component').then(m=>m.Pagina2Component)},
  {path:"pagina3", loadComponent:()=>import('./pages/pagina3/pagina3.component').then(m=>m.Pagina3Component)},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

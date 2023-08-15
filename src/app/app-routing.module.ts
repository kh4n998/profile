import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ka',
    pathMatch: 'full'
  },
  {
    path: 'ka',
    loadChildren: () => import('./sections/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'playground',
    loadChildren: () => import('./sections/playground/playground.module').then(m => m.PlaygroundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/market/market.module').then((m) => m.MarketModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

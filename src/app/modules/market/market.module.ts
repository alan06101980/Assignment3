import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'products', component: ProductsComponent }];

@NgModule({
  declarations: [
    ProductsComponent,
    CategoryMenuComponent,
    CategoryMenuItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'products', component: ProductsComponent }]),
  ],
})
export class MarketModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const productRoutes: Routes = [
  {path: 'products', component: ProductListComponent},
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

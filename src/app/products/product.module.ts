import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarComponent } from '../shared/star/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }


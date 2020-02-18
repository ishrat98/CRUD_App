import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './models/product/product.component';
import { LookupComponent } from './models/lookup/lookup.component';


@NgModule({
  declarations: [ProductComponent, LookupComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }

import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { ProductListPage } from './product-list'
import { IonProductsComponentModule } from '../../components/ion-products/ion-products.module'

@NgModule({
  declarations: [
    ProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductListPage),
    IonProductsComponentModule
  ],
})
export class ProductListPageModule {}

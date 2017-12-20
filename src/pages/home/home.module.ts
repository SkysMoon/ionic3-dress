import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { HomePage } from './home'
import { IonProductsComponentModule } from '../../components/ion-products/ion-products.module'

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    IonProductsComponentModule
  ]
})
export class HomePageModule { }
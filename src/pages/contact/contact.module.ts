import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { ContactPage } from './contact'
import { IonProductsComponentModule } from '../../components/ion-products/ion-products.module'

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    IonProductsComponentModule
  ]
})
export class ContactPageModule { }
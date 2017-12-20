import { Component } from '@angular/core'
import { IonicPage, NavController, NavParams } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
  selectedItem: any
  imgs: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = this.navParams.get("item")
    if (this.selectedItem.SmallImages) {
      this.imgs = this.selectedItem.SmallImages
    }
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as woo from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  wooCommerce: any;
  constructor(public navCtrl: NavController) {
    this.wooCommerce = woo({
      url: 'https://busolami.000webhostapp.com/',
      consumerKey: 'ck_e3a0788716d789e411213d9f0d9e0085e3279413',
      consumerSecret: 'cs_0a7880c5de8f6a800591c7c6eead4ff8df1092dc  ',
      wpAPI: true,
      version: 'wc/v1'
    });
    
    
    this.wooCommerce.getAsync('products')
    .then((data)=>{
      console.log(data)
    }), 
    (err)=>{
      console.log(err);
    }
      ;
  
  }



}

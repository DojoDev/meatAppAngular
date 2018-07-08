import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartservice: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shoppingCartservice.items;
  }
  removeItem(item: any){
   this.shoppingCartservice.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartservice.addItem(item)
   }

  clear(){
    this.shoppingCartservice.clear()
  }

  total(): number{
    return this.shoppingCartservice.total()
  }

}

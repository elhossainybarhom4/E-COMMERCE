import { CommonModule } from '@angular/common';
import { Component, TrackByFunction } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from "../product-list/product-list.component";
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-products-parent',
  standalone: true,
  imports: [FormsModule, CommonModule, ProductListComponent],
  templateUrl: './products-parent.component.html',
  styleUrl: './products-parent.component.scss'
})
export class ProductsParentComponent {
filterByName: string='';
cart:Iproduct[]=[];
  trackById!: TrackByFunction<Iproduct>;
  addProductInCart(product: any) {
    const existingProduct = this.cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
      existingProduct.finalPrice = existingProduct.totalPrice - (existingProduct.totalPrice * (existingProduct.discount / 100));
    } else {
      const totalPrice = product.price;
      const finalPrice = totalPrice - (totalPrice * (product.discount / 100)); 

      this.cart.push({
        ...product,
        quantity: 1,
        totalPrice: totalPrice,
        finalPrice: finalPrice
      });
    }
  }


removeProductFromCart(productId: number){
  this.cart = this.cart.filter(item => item.id !== productId);
}


}

import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalcDiscountPipe } from "../../pipes/calc-discount.pipe";
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { ProductsService } from '../../Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule, CalcDiscountPipe,ImgStyleDirective],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  productsAfterFilter:Iproduct[]=[];
  calcDiscountPipe: any;

@Input() set filterByName(value:string){

    this.productsAfterFilter=this.productService.performFilter(value);


  }
  // productsList: Iproduct[];
  inputValue: string="HUAWEI "
 @Output()  newPrdInCart=new EventEmitter<Iproduct>();
  constructor( public productService:ProductsService , private router:Router) {


}
  ngOnInit(): void {
    this.productsAfterFilter=this.productService.getAllProducts();
  }



addToCart(prd:Iproduct){


  this.newPrdInCart.emit(prd);

 }

 goToDetails(product:Iproduct) {

  this.router.navigate(['/details', product.id]);



}



}




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../Services/products.service';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {

  prdID: number = 0;
  product: Iproduct | undefined;
  allProducts: Iproduct[] = [];
  IDsList: number[] = [];
  currentIndex: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productsService.getAllProducts();
    this.IDsList = this.allProducts.map(product => product.id); 

    this.activatedRoute.paramMap.subscribe((params) => {
      this.prdID = Number(params.get('id'));
      this.product = this.productsService.getProductById(this.prdID);
      console.log(this.product);
    });
  }

  prevFunc() {
    this.currentIndex = this.IDsList.indexOf(this.prdID);
    if (this.currentIndex > 0) {
      this.router.navigate(['details', this.IDsList[--this.currentIndex]]);
    }
  }

  nextFunc() {
    this.currentIndex = this.IDsList.indexOf(this.prdID);
    if (this.currentIndex < this.IDsList.length - 1) {
      this.router.navigate(['details', this.IDsList[++this.currentIndex]]);
    }
  }
}

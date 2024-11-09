import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductsParentComponent } from "./Components/products-parent/products-parent.component";
import { LoginComponent } from "./Components/Login/login/login.component";
import { ProductDetailsComponent } from "./Components/product-details/product-details.component";
// import { LoginComponent } from "./Components/Login/login/login.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FooterComponent, ProductListComponent, ProductsParentComponent, LoginComponent, ProductDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-standalone-project';
}

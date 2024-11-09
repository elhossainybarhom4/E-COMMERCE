import { Routes } from '@angular/router';
import { MainHomeComponent } from './Components/main-home/main-home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductsParentComponent } from './Components/products-parent/products-parent.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

export const routes: Routes = [

  {path:'', redirectTo:'/Home', pathMatch:'full'},


{path:'Home', component:MainHomeComponent, title: 'Home Page'},
{path: 'ProductList', component:ProductListComponent, title: 'Products List Page'},
{path: 'Products', component:ProductsParentComponent, title: 'Products Parent'},
{path: 'details/:id', component:ProductDetailsComponent, title: 'Products details'},
{path: 'Login', component:LoginComponent, title: 'Login'},




];

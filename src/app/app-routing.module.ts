import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './components/create-account.component/create-account.component';
import { FindProductComponent } from './components/find-product/find-product.component';
import { HomeComponent } from './components/home/home.component';
import { LeasingRequestComponent } from './components/leasing-request/leasing-request.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';

const routes: Routes = [
  {path: 'find-products', component: FindProductComponent},
  {path: 'results', component: ShowProductsComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'home', component: HomeComponent},
  {path: 'leasing-request', component: LeasingRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

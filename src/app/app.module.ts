import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { FindProductComponent } from './components/find-product/find-product.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';
import { CreateAccountComponent } from './components/create-account.component/create-account.component';
import { HomeComponent } from './components/home/home.component';
import { LeasingRequestComponent } from './components/leasing-request/leasing-request.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FindProductComponent,
    ShowProductsComponent,
    CreateAccountComponent,
    HomeComponent,
    LeasingRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormsModule,
    MatDividerModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

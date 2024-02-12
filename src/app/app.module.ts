import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    BrowserModule,
    RouterModule.forRoot([
        { path: 'products/:productId', component: ProductDetailsComponent },

    ])
  ]
})
export class AppModule { }

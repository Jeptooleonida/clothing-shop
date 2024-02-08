import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit{
 
  httpClient = inject (HttpClient);
  data:any[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.httpClient
    .get('https://fakestoreapi.com/products')
    
    .subscribe((data: any) =>  {
      console.log(data);
      this.data = data})
  }
}

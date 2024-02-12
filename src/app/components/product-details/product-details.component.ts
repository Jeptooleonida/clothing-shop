import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
 data: any[]= [];

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
  }

}

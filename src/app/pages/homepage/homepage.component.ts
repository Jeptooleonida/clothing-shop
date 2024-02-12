import { Component } from '@angular/core';
import { ProductListComponent } from "../../components/product-list/product-list.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [ProductListComponent]
})
export class HomepageComponent {
 
}

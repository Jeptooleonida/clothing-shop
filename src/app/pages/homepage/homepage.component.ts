import { Component } from '@angular/core';
import { ProductListComponent } from "../../components/product-list/product-list.component";
// import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [
        ProductListComponent,
        // HttpClientModule
    ]
})
export class HomepageComponent {
 
}

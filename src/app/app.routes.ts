import {Routes} from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { FindStoreComponent } from './pages/find-store/find-store.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
    
       { path:'', component:HomepageComponent },
       { path:'blog', component:BlogComponent} ,
       { path:'categories', component:CategoriesComponent},
       { path:'collections', component:CollectionsComponent},
       { path:'find-store', component:FindStoreComponent},
       { path: 'store', component:StoreComponent},
         
    
];

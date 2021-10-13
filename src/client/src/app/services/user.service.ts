import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Product } from '../../../../shared/models/user.model';
import {Category} from '../../../../shared/models/category.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  selectedUserId = '';

  constructor(private api: ApiService) {}

  getProducts() {
    return this.api.get<{ data: Product[] }>('products').pipe(map(res => res.data));
  }
  createProduct(product: Product) {
      return this.api.post<{data: Product}>('create-product', product).pipe(map(res => res.data));
  }
  
  getCategories() {
    return this.api.get<{ data: Category[]}>('categories').pipe(map(res => res.data));
  }

 
}

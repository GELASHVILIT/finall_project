import { pageDetails } from './../interface/pagination';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { productpagination } from '../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly http = inject(HttpClient);
  private readonly BACKEND_URL = 'https://api.everrest.educata.dev';

  allProducts(pageDetails: pageDetails) {
    this.http.get<productpagination>(
      `${this.BACKEND_URL}/shop/products/all?page_index=${pageDetails.pageIndex}&page_size=${pageDetails.pageSize}`,
    );
  }
}

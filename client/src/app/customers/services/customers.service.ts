import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }

  public getCustomers(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>('/api/customer');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Customer } from '../customer';


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  apiURL: string = 'http://www.server.com/api/';

  private data:any = [];
  // public firstPage: string = "";
  // public prevPage: string = "";
  // public nextPage: string = "";
  // public lastPage: string = "";

  constructor(private httpClient:HttpClient) { }

  public createCustomer(customer: Customer){
    return this.httpClient.post(`${this.apiURL}`,customer);
  }

  getUserData(){
    return this.httpClient.get(`${this.apiURL}`);
  }

}

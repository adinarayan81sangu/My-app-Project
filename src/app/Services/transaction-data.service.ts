import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {

  constructor(public http:HttpClient) { }
  getAllData():Observable<any>{
    return this.http.get("http://localhost:3000/Transaction-total")

  }
  SuccessData():Observable<any>{
    return this.http.get("http://localhost:3000/Transaction-success");
  }
  FaildData():Observable<any>{
    return this.http.get("http://localhost:3000/Transaction-faild")
  }
}

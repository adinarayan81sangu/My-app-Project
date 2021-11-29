import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  url = "http://localhost:3000/TableDta";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  GetTableData(){
    return this.http.get(this.url)
  }
  postData(Data:any){
    return this.http.post(this.url,Data);
  }
}

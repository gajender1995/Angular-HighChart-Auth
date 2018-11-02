import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable()

export class ChartService {
	
constructor(private http: HttpClient) {

  }


getChart1(url : string ) : Observable<HttpEvent<any>> {
	

   const req = new HttpRequest('GET', url);
    return this.http.request(req);
    }

    getChart2() {

    console.log(30);

    }
}
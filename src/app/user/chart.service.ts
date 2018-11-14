import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable , forkJoin} from "rxjs";

@Injectable()

export class ChartService {
	
constructor(private http: HttpClient) {

  }


getChart1(city : string )  {
	
	if(!city){
		city = "London";
	}

	const urlToday = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b9feb11dd0284ae1a415f94d50777169";
    const urlForcast = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=b9feb11dd0284ae1a415f94d50777169";

   //const req = new HttpRequest('GET', urlToday);
   
    var response1 = this.http.get(urlToday);
    var response2 = this.http.get(urlForcast);
    //return this.http.request(response1);
    
     
    return forkJoin(response1, response2);


    }

    
}
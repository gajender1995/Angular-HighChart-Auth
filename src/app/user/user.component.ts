import { Component , OnInit } from '@angular/core';
import { ChartService  } from './chart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css','./css/style.css']
})
export class UserComponent implements OnInit {  

 constructor( private chartService : ChartService) {


 }

    model = {
      name : String ,
      temp : String,
      weather : String
    };

    forcastModel = {
      humidity : [],
      temp : [],
      weather : [],
      date : []
    }

    
    result = {};

ngOnInit() {

    this.callApi("london");

  }

  callApi(city)  {
  this.chartService.getChart1(city).subscribe(
      (data: any) => { 
      //forkJoin is used here for multiple http call
    
    if(data){

      //for 1st http call for currect weather
    this.model.name = data[0].name;
    this.model.temp = data[0].main.temp.toFixed(1);
    this.model.weather = data[0].weather[0].main;

 
    //for 2st http call for currect weather
    for(var i=0;i<=32;i+=8) {
      this.forcastModel.humidity.push(data[1].list[i].main.humidity);
      this.forcastModel.temp.push(data[1].list[i].main.temp.toFixed(1));
      this.forcastModel.weather.push(data[1].list[i].weather[0].main);
      this.forcastModel.date.push(data[1].list[i].dt_txt.slice(0,10));
 
    }


   // this.dataConvert(this.forcastModel);

 
    
console.log(data);
    
     
    
  }
},
error => console.log(error) 

    )
    };

/*day1,day2,day3,day4 : any;
dataConvert (data) {
console.log(data);

for (var i = 0;i<data.date.length;i++){
  var temp=[];
 for(var key in data){
    temp.push(data[key][i]);
}
this.result[i] = temp;
}
this.day1 = [ { date : this.result[0][0] } , { humidity :  this.result[0][1]},{temp : this.result[0][2]}];
this.day2 = this.result[1];
this.day3 = this.result[2];
this.day4 = this.result[3];
this.day5 = this.result[4];


}
*/
   

}

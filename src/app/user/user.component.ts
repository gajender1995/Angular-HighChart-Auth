import { Component , OnInit } from '@angular/core';
import { ChartService  } from './chart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {  

 constructor( private chartService : ChartService) {


 }
    options: Object;
    dataArr = [];
    dataArr2 = [];
    i = 0;

ngOnInit() {

    this.callApi();

  }

  callApi()  {



this.chartService.getChart1('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any) => { 
      
     if(data.body){
     this.dataArr= [];
     this.dataArr2= [];
      for(var i=0 ; i<data.body.length;i++){
      this.dataArr.push(data.body[i].id+Math.floor(Math.random()*40+1));
      this.dataArr2.push(data.body[i].id+Math.floor(Math.random()*40+1));
      if(i == data.body.length-1){
         this.options = {
            title : { text : 'simple chart' },
            series: [{
                name : 'User Online',
                data:  this.dataArr,
            },
            {
                name : 'File Download',
                data:  this.dataArr2,
            }]
        };

      }

      }

      }
},
error => console.log(error) 

    )
    }

   

}

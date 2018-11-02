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
    i = 0;

ngOnInit() {

    this.callApi();

  }

  callApi()  {



this.chartService.getChart1('https://jsonplaceholder.typicode.com/users').subscribe(
      (data: any) => { 
      
     if(data.body){
     this.dataArr= [];
      for(var i=0 ; i<data.body.length;i++){
      this.dataArr.push(data.body[i].id+Math.floor(Math.random()*6+1));
      if(i == data.body.length-1){
         this.options = {
            title : { text : 'simple chart' },
            series: [{
                data:  this.dataArr,
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

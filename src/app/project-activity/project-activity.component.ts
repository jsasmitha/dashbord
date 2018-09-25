import { Component, OnInit } from '@angular/core';

import {ProjectActivityService} from '../project-activity.service.ts'

@Component({
  selector: 'app-project-activity',
  templateUrl: './project-activity.component.html',
  styleUrls: ['./project-activity.component.css']
})
export class ProjectActivityComponent implements OnInit {

  constructor(private projectActivityService:ProjectActivityService) { }
labelArray:String[]=[];
current=[];
last=[];
dataShow:boolean=false;
projectActivityData:Object;
public lineChartOptions:any = {
    responsive: true
  };
 public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
lineChartData:Array[];
  ngOnInit() {
this.projectActivityService.getProjectActivityData().then(data=>{
console.log("in com",data);
this.projectActivityData=data;
this.getLabelData();

});
  }

getLabelData():String[]{

this.labelArray = Object.keys(this.projectActivityData);



console.log(this.labelArray );
this.getValueArrays();
}

getValueArrays(){
for(let i=0;i<this.labelArray.length;i++){
console.log(this.projectActivityData[this.labelArray[i]].last)
this.current.push(this.projectActivityData[this.labelArray[i]].current);
this.last.push(this.projectActivityData[this.labelArray[i]].last)
this.getLineChartData();
console.log(this.current,this.last)
}
}

getLineChartData(){
this.lineChartData=[
{data:this.last,label:'last'}
{data:this.current,label:'current'}
]
this.randomize();
}

 public randomize():void {


    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
this.dataShow=true;
console.log("this.lineChartData",this.lineChartData)
  }

}

import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  id = ""
  usa = false
  uk = false
  shc = false
  dax = false
  nkx = false
  moex = false
  btc = false

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string
    if(this.id==="1"){ 
      this.usa = true
    }
    else if(this.id==="2"){
      this.uk = true
    }
    else if(this.id=="3"){
      this.shc = true
    }
    else if(this.id=="4"){
      this.nkx = true
    }
    else if(this.id=="5"){
      this.dax = true
    }
    else if(this.id=="6"){
      this.moex = true
    }
    else if(this.id=="7"){
      this.btc = true
    }
    console.log(this.usa)
    console.log(this.id)
    console.log(this.id==="1")
    
  }

  constructor(private route:ActivatedRoute){}
}

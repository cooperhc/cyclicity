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
  eth = false
  tsla = false
  aapl = false
  amd = false
  googl = false
  amzn = false
  meta = false
  msft = false
  nflx = false
  nvda = false
  assets = false
  load = true

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
      this.amzn = true
    }
    else if(this.id=="8"){
      this.amd = true
    }
    else if(this.id=="9"){
      this.aapl = true
    }
    else if(this.id=="10"){
      this.googl = true
    }
    else if(this.id=="11"){
      this.meta = true
    }
    else if(this.id=="12"){
      this.msft = true
    }
    else if(this.id=="13"){
      this.nflx = true
    }
    else if(this.id=="14"){
      this.nvda = true
    }
    else if(this.id=="15"){
      this.tsla = true
    }
    else if(this.id=="16"){
      this.btc = true
    }
    else if(this.id=="17"){
      this.eth = true
    }
    else if(this.id=="18"){
      this.assets = true
    }    
  }

  constructor(private route:ActivatedRoute){}
}

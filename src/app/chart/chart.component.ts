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
  selectedChart = ""

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string
    if(this.id==="1"){ 
      this.usa = true
      this.selectedChart = "usa"
    }
    else if(this.id==="2"){
      this.uk = true
      this.selectedChart = "uk"
    }
    else if(this.id=="3"){
      this.shc = true
      this.selectedChart = "shc"
    }
    else if(this.id=="4"){
      this.nkx = true
      this.selectedChart = "nkx"
    }
    else if(this.id=="5"){
      this.dax = true
      this.selectedChart = "dax"
    }
    else if(this.id=="6"){
      this.moex = true
      this.selectedChart = "moex"
    }
    else if(this.id=="7"){
      this.amzn = true
      this.selectedChart = "amzn"
    }
    else if(this.id=="8"){
      this.amd = true
      this.selectedChart = "amd"
    }
    else if(this.id=="9"){
      this.aapl = true
      this.selectedChart = "aapl"
    }
    else if(this.id=="10"){
      this.googl = true
      this.selectedChart = "googl"
    }
    else if(this.id=="11"){
      this.meta = true
      this.selectedChart = "meta"
    }
    else if(this.id=="12"){
      this.msft = true
      this.selectedChart = "msft"
    }
    else if(this.id=="13"){
      this.nflx = true
      this.selectedChart = "nflx"
    }
    else if(this.id=="14"){
      this.nvda = true
      this.selectedChart = "nvda"
    }
    else if(this.id=="15"){
      this.tsla = true
      this.selectedChart = "tsla"
    }
    else if(this.id=="16"){
      this.btc = true
      this.selectedChart = "btc"
    }
    else if(this.id=="17"){
      this.eth = true
      this.selectedChart = "eth"
    }  
    window.scrollTo(0, 0);
    
  }

  constructor(private route:ActivatedRoute){}
}

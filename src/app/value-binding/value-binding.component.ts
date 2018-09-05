import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'as-value-binding',
  templateUrl: './value-binding.component.html',
  styleUrls: ['./value-binding.component.scss']
})
export class ValueBindingComponent implements OnInit {
  public imgSrc:string = '../../assets/1.jpg'
  constructor() { }

  ngOnInit() {
  }

  public changeSrc():void{
    if(Math.ceil(Math.random()*1000000000)%2){
      this.imgSrc = "../../assets/2.jpg"
    }else{
      this.imgSrc = "../../assets/1.jpg"
    }
  }

}

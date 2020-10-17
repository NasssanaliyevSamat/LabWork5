import { Component, OnInit } from '@angular/core';
import {Color} from '../shared/Color';
import {COLORS} from '../shared/Colors';
@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrls: ['./color-change.component.css']
})
export class ColorChangeComponent implements OnInit {

  colors = COLORS;
  selected: Color;
  ss: Color;
  constructor() {}
  ngOnInit(): void {

    // window.addEventListener('load', () => {
    //   const hx = document.getElementById('2') as HTMLLabelElement;
    //   hx.style.backgroundColor = this.selected.ColorHex;
    // });

  }

  onSelected(color: Color): void{
    this.selected = color;
    // for (let i = 0; i <= 4; i++){
    //   if (this.selected.id !== color.id){
    //     this.selected.ColorHex = color.ColorHex;
    //   }
    // }
    // this.selected.ColorHex = color.ColorHex;
    // const hx = document.getElementById('2') as HTMLLabelElement;
    // hx.style.backgroundColor = this.selected.ColorHex;
  }
  // loadHex(color: Color): void{
  //     this.ss = color;
  //     // for (let i = 0; i <= 4; i++){
  //     //   if (this.ss.id === color.id){
  //     //     this.ss.ColorHex = color.ColorHex;
  //     //   }
  //     // }
  //     const hx = document.getElementById('2') as HTMLLabelElement;
  //     hx.style.backgroundColor = this.ss.ColorHex;
  // }
}

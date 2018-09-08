import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'as-font-resize',
  templateUrl: './font-resize.component.html',
  styleUrls: ['./font-resize.component.scss']
})
export class FontResizeComponent implements OnInit {
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }
 
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}

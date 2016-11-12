import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slideshow',
  templateUrl: 'slideshow.component.html',
  styleUrls: ['slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @Input()
  images: string[];
  selected: string;

  constructor() { }

  ngOnInit() {
  }

  display(image) {
     this.selected=image;
  }
}

import { Component, OnInit } from '@angular/core';
import { SlideshowComponent } from '../slideshow';

@Component({
  moduleId: module.id,
  selector: 'app-house',
  templateUrl: 'house.component.html',
  styleUrls: ['house.component.css'],
  directives: [ SlideshowComponent ]
})
export class HouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

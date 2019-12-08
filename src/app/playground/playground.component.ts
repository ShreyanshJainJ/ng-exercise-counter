import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Input() counter: number;

  constructor() {}

  ngOnInit() {}

  incrementClickHandler() {
    console.log('Increment');
  }

  decrementClickHandler() {
    console.log('Decrement');
  }
}

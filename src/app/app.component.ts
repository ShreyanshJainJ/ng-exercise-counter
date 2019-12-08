import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  incrementHandler() {
    this.counter++;
  }

  decrementHandler() {
    this.counter--;
  }
}

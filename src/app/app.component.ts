import { Component, OnInit } from '@angular/core';

import { Avenger } from './models/avenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avengers: Avenger[] = [
    new Avenger('Hulk', 'Bruce Banner', 'assets/hulk-icon.png', 'green'),
    new Avenger('Thor', 'Thor Odinson', 'assets/thor-icon.png', 'grey'),
    new Avenger('Iron Man', 'Anthony Stark', 'assets/iron-man-icon.png', 'red')
  ];
  selectedAvenger: Avenger;

  setSelectedAvenger(newSelectedAvenger: Avenger) {
    this.selectedAvenger = newSelectedAvenger;
  }
}

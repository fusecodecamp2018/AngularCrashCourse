import { Component } from '@angular/core';
import { Avenger } from './models/avenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avengers: Avenger[] = [
    new Avenger('Hulk', 'Bruce Banner', 'green', 'assets/hulk-icon.png', null),
    new Avenger('Thor', 'Thor Odinson', 'grey', 'assets/thor-icon.png', 'https://www.youtube.com/watch?v=JOddp-nlNvQ'),
    new Avenger('Iron Man', 'Anthony Stark', 'red', 'assets/iron-man-icon.png', 'https://www.youtube.com/watch?v=byQpcN78UjQ')
  ];
}

import { Component } from '@angular/core';
import { Avenger } from './models/avenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avengers: Avenger[] = [
    new Avenger('Hulk', 'Bruce Banner', 'green', 'assets/hulk.png', 'http://marvel-movies.wikia.com/wiki/Hulk'),
    new Avenger('Thor', 'Thor Odinson', 'grey', 'assets/thor.png', 'http://marvel-movies.wikia.com/wiki/Thor_Odinson'),
    new Avenger('Iron Man', 'Anthony Stark', 'red', 'assets/iron-man.png', 'http://marvel-movies.wikia.com/wiki/Anthony_Stark')
  ];
}

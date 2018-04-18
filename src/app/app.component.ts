import { Component } from '@angular/core';
import { Avenger } from './models/avenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avengers: Avenger[] = [
    new Avenger('Hulk', 'Bruce Banner'),
    new Avenger('Thor', 'Thor Odinson')
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avengers: any[] = [
    { 'name': 'Hulk', 'realName': 'Bruce Banner' },
    { 'name': 'Thor', 'realName': 'Thor Odinson' }
  ];
}

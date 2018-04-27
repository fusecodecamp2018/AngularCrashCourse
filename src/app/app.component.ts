import { Component, OnInit } from '@angular/core';

import { Avenger } from './models/avenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  avengers: Avenger[] = [
    new Avenger('Hulk', 'Bruce Banner', 'assets/hulk-icon.png', 'green',
      // tslint:disable-next-line:max-line-length
      'Bruce Banner was a scientist who was working on a gamma bomb when he noticed teenager Rick Jones out on the test range. Although he rushed out into the test site and heroically pushed the boy into the protective trench to save him from the blast, Bruce was exposed to extreme amounts of gamma radiation that altered his DNA structure due to gamma rays and trauma passed down by his father and caused him to become a giant green (at first grey) monster of incredible power known as the Hulk whenever he starts to get angry.'
    ),
    new Avenger('Thor', 'Thor Odinson', 'assets/thor-icon.png', 'grey',
      // tslint:disable-next-line:max-line-length
      'Leaping from the legends of Norse mythology, the Asgardian God of Thunder, Thor Odinson, is the son of Odin the All-Father and Jord, Elder Goddess and spirit of the Earth. He frequently stands alongside the Avengers in the defense of the people of Midgard (Earth), often against the schemes of his adopted brother Loki.'
    ),
    new Avenger('Iron Man', 'Anthony Stark', 'assets/iron-man-icon.png', 'red',
      // tslint:disable-next-line:max-line-length
      'Anthony Edward "Tony" Stark is an eccentric self-described genius, billionaire, playboy and philanthropist and the former head of Stark Industries. Using his own great wealth and exceptional technical knowledge, Stark enjoyed the playboy lifestyle for many years until he was kidnapped by the Ten Rings. With his life on the line, Stark created an armored suit which he used to escape his captors, returning home and becoming the armored superhero known as Iron Man, battling against terrorists as well as his own former business partner Obadiah Stane. Stark enjoyed the fame that came with his new secret identity and decided to share it with the world, publicly announcing himself as Iron Man.'
    )
  ];
  selectedAvenger: Avenger;

  setSelectedAvenger(newSelectedAvenger: Avenger) {
    this.selectedAvenger = newSelectedAvenger;
  }
}

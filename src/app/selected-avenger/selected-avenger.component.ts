import { Component, OnInit, Input } from '@angular/core';
import { Avenger } from '../models/avenger';

@Component({
  selector: 'app-selected-avenger',
  templateUrl: './selected-avenger.component.html',
  styleUrls: ['./selected-avenger.component.scss']
})
export class SelectedAvengerComponent implements OnInit {
  @Input() selectedAvenger: Avenger;
  constructor() { }

  ngOnInit() {
  }

}

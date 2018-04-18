import { Component, OnInit, Input } from '@angular/core';
import { Avenger } from '../models/avenger';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss']
})
export class AvengerComponent implements OnInit {
  @Input() avenger: Avenger;
  constructor() { }

  ngOnInit() {
  }

}

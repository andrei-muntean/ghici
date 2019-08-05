import { Component, OnInit } from '@angular/core';
import riddles from '../../assets/riddles.json';
import { IRiddle } from '../models.js';

@Component({
  selector: 'app-riddle-view',
  templateUrl: './riddle-view.component.html',
  styleUrls: ['./riddle-view.component.scss']
})
export class RiddleViewComponent implements OnInit {

  private _allRiddles: IRiddle[] = riddles;
  riddle: IRiddle;
  order = 0;
  answer: string;

  constructor() {
    this.riddle = this._allRiddles[0];
  }

  ngOnInit(): void {
  }
}

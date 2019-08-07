import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import riddles from '../../assets/riddles.json';
import { IRiddle } from '../models.js';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-riddle-view',
  templateUrl: './riddle-view.component.html',
  styleUrls: ['./riddle-view.component.scss']
})
export class RiddleViewComponent implements OnInit {

  @ViewChild('answer', {static: false}) answer: ElementRef;

  private _allRiddles: IRiddle[] = riddles;
  riddle: IRiddle;
  order = 0;

  constructor(private _dialog: MatDialog, private _router: Router) {
    this.riddle = this._allRiddles[0];
  }

  ngOnInit(): void {
  }

  back(): void {
    this.riddle = this._allRiddles[--this.order];
  }

  openDialog(inputValue: string): void {
    if (!inputValue) {
      return;
    }
    const correctAnswer = this.riddle.answer.find(answer => answer === inputValue) !== undefined;
    const dialogRef = this._dialog.open(ResultDialogComponent, {
      disableClose: true,
      data: {correct: correctAnswer, correctImage: this.riddle.image}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.answer.nativeElement.value = '';
        const nextOrder = ++this.order;
        if (nextOrder >= this._allRiddles.length) {
          this._router.navigate(['/finalview']);
        } else {
          this.riddle = this._allRiddles[nextOrder];
        }
      }
    });
  }
}

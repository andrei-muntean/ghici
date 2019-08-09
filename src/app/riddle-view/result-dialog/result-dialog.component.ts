import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from '../../models';
import { ElectronService } from '../../core/services';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.scss']
})
export class ResultDialogComponent {
  constructor(
    private _electronService: ElectronService,
    private _dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {}

  close(): void {
    this._dialogRef.close();
  }

  print(): void {
    const printContents = document.getElementById('print-section').innerHTML;
    const popupWin = window.open(
      '_blank',
      '',
      'top=0,left=0,height=auto,width=550px'
    );
    popupWin.document.open();
    popupWin.document.write(
      '\n <html>\n <head>\n <title>' +
        this.data.correctAnswer +
        '</title>\n  <style> img {max-width:550px;} </style>\n </head>\n ' +
        '<body onload="window.print();window.close()">' +
        printContents +
        '</body>\n      </html>'
    );
    popupWin.document.close();
  }
}

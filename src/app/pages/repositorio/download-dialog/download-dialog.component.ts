import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {NbDialogRef} from '@nebular/theme';
import {Sheet} from '../../../@core/data/sheet';

@Component({
  selector: 'ngx-download-dialog',
  templateUrl: './download-dialog.component.html',
  styleUrls: ['./download-dialog.component.scss'],
})
export class DownloadDialogComponent implements OnInit {

  @Input()
  sheet: Sheet;

  constructor(private dialogRef: NbDialogRef<DownloadDialogComponent>) { }

  ngOnInit(): void {
    // Vacío
  }

  downloadMusicXML() {
    window.location.href = `${environment.apiUrl}/sheets/${(this.sheet.id)}/file/musicxml`;
    this.dialogRef.close();
  }

  downloadPDF() {
    window.location.href = `${environment.apiUrl}/sheets/${(this.sheet.id)}/file/pdf`;
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}

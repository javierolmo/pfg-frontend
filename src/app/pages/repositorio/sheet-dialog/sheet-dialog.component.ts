import { AfterViewInit, Component, Input } from '@angular/core';
import { SheetService } from 'app/@core/utils/sheet.service';

@Component({
  selector: 'ngx-sheet-dialog',
  templateUrl: './sheet-dialog.component.html',
  styleUrls: ['./sheet-dialog.component.scss'],
})
export class SheetDialogComponent implements AfterViewInit {

  @Input()
  sheetId: number;
  xmlfile;

  constructor(private sheetService: SheetService) {
    console.log(this.sheetId);
  }

  ngAfterViewInit(): void {
    this.sheetService.getSheetXML(this.sheetId).subscribe(sheet => this.xmlfile = sheet);
  }



}

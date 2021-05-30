import {Component, Input, OnInit} from '@angular/core';
import {Sheet} from '../../../@core/data/sheet';
import {SheetService} from '../../../@core/utils/sheet.service';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

  @Input()
  sheet: Sheet;

  constructor(private sheetService: SheetService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
      // Vacío
  }

  retry(id: number) {
    this.sheetService.retry(this.sheet.id).subscribe(
        result => {
          this.sheet.finished = false;
          this.toastrService.success(result, 'Tarea planificada');
        },
        error => {
            console.log(error);
          this.toastrService.danger(error.error.message, 'Error al reintentar');
        },
    );
  }

}

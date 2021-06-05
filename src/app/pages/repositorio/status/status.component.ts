import {Component, Input, OnInit} from '@angular/core';
import {Sheet} from '../../../@core/data/sheet';
import {SheetService} from '../../../@core/utils/sheet.service';
import {NbToastrService} from '@nebular/theme';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'ngx-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

    @Input()
    sheet: Sheet;

    refresher: Subscription;

    constructor(private sheetService: SheetService, private toastrService: NbToastrService) {
    }

    ngOnInit() {
        this.refresher = interval(2000).subscribe((x => this.refresh()));
    }

    retry(id: number) {
        this.sheetService.retry(this.sheet.id).subscribe(
            result => {
                this.sheet.finished = false;
                this.toastrService.success(result, 'Tarea planificada');
            },
            error => {
                this.toastrService.danger(error.error.message, 'Error al reintentar');
            },
        );
    }

    private refresh() {
        this.sheetService.getSheet(this.sheet.id).subscribe(
            sheet => {
                if (sheet.finished) {
                    this.sheet.finished = true;
                    this.refresher.unsubscribe();
                }
            },
            error => {
                this.sheet.finished = true;
                this.refresher.unsubscribe();
            });
    }

}

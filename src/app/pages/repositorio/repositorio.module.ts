import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositorioRoutingModule } from './repositorio-routing.module';
import { RepositorioComponent } from './repositorio.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SheetService } from 'app/@core/utils/sheet.service';
import {
    NbActionsModule, NbButtonModule,
    NbCardModule, NbContextMenuModule,
    NbDialogModule,
    NbIconModule, NbInputModule,
    NbListModule, NbPopoverModule,
    NbSpinnerModule, NbTooltipModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { OsmdRendererModule } from 'osmd-angular';
import { SheetDialogComponent } from './sheet-dialog/sheet-dialog.component';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [RepositorioComponent, SheetDialogComponent, DownloadDialogComponent, StatusComponent],
    imports: [
        CommonModule,
        RepositorioRoutingModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        NbEvaIconsModule,
        NbIconModule,
        NbListModule,
        NbCardModule,
        OsmdRendererModule,
        NbDialogModule,
        NbSpinnerModule,
        NbActionsModule,
        NbContextMenuModule,
        NbButtonModule,
        NbTooltipModule,
        NbPopoverModule,
        NbInputModule,
    ],
  providers: [SheetService],
})
export class RepositorioModule { }

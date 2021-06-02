import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LogsComponent } from './logs/logs.component';
import { AdminComponent } from './admin.component';
import {
    NbAlertModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbListModule, NbSpinnerModule,
    NbTreeGridDataSourceBuilder,
    NbTreeGridModule
} from '@nebular/theme';
import {AdminService} from '../../@core/utils/admin.service';
import { LogComponent } from './logs/log/log.component';


@NgModule({
  declarations: [LogsComponent, AdminComponent, LogComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        NbCardModule,
        NbTreeGridModule,
        NbInputModule,
        NbListModule,
        NbIconModule,
        NbSpinnerModule,
        NbAlertModule,
    ],
  providers: [NbTreeGridDataSourceBuilder, AdminService],
})
export class AdminModule { }

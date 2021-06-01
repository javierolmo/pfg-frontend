import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LogsComponent } from './logs/logs.component';
import { AdminComponent } from './admin.component';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule, NbSpinnerModule,
  NbTreeGridDataSourceBuilder,
  NbTreeGridModule
} from '@nebular/theme';
import {AdminService} from '../../@core/utils/admin.service';


@NgModule({
  declarations: [LogsComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbInputModule,
    NbListModule,
    NbIconModule,
    NbSpinnerModule,
  ],
  providers: [NbTreeGridDataSourceBuilder, AdminService],
})
export class AdminModule { }

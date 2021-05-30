import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {
    NbButtonModule,
    NbCardModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule, NbSelectModule
} from '@nebular/theme';
import {ProfileComponent} from './profile.component';


@NgModule({
  declarations: [ProfileComponent],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        NbInputModule,
        NbCardModule,
        NbFormFieldModule,
        NbIconModule,
        NbLayoutModule,
        NbButtonModule,
        NbSelectModule,
    ],
})
export class ProfileModule { }

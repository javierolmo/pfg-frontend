import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import {NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule} from '@nebular/theme';
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
  ],
})
export class ProfileModule { }

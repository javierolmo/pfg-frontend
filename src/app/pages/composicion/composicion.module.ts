import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposicionRoutingModule } from './composicion-routing.module';
import { ComposicionComponent } from './composicion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { CompositionRequestFormComponent } from './composition-request-form/composition-request-form.component';
import { UtilService } from 'app/@core/utils/util.service';
import {InstrumentService} from '../../@core/utils/instrument.service';
import {TonalityService} from '../../@core/utils/tonality.service';
import {MeasureService} from '../../@core/utils/measure.service';


@NgModule({
  declarations: [ComposicionComponent, CompositionRequestFormComponent],
  imports: [
    CommonModule,
    ComposicionRoutingModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    NbToastrModule,
  ],
  providers: [UtilService, InstrumentService, TonalityService, MeasureService],
})
export class ComposicionModule { }

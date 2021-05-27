import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposicionRoutingModule } from './composicion-routing.module';
import { ComposicionComponent } from './composicion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbToastrModule } from '@nebular/theme';
import { CompositionRequestFormComponent } from './composition-request-form/composition-request-form.component';
import { UtilService } from 'app/@core/utils/util.service';


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
  providers: [UtilService],
})
export class ComposicionModule { }

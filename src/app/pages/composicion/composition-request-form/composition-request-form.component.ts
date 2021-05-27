import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NbToastrService} from '@nebular/theme';
import { Specs } from 'app/@core/data/specs';
import { Instrumento } from 'app/@core/data/instrumento';
import { UtilService } from 'app/@core/utils/util.service';
import {UserService} from '../../../@core/utils/user.service';
import {Tonality} from '../../../@core/data/tonality';
import {Measure} from '../../../@core/data/measure';

@Component({
  selector: 'ngx-composition-request-form',
  templateUrl: './composition-request-form.component.html',
  styleUrls: ['./composition-request-form.component.scss'],
})
export class CompositionRequestFormComponent implements OnInit {

  authors: string[] = ['Javier Olmo Injerto'];
  tonalidades: Tonality[];
  compases: Measure[];
  instrumentos:  Instrumento[];
  requestForm:  FormGroup;

  constructor(
    private compositionService: UtilService,
    private formBuilder: FormBuilder,
    private toastrService: NbToastrService,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    this.compositionService.getAvailableInstruments().subscribe(instruments => this.instrumentos = instruments);
    this.compositionService.getAvailableMeasures().subscribe(compases => this.compases = compases);
    this.compositionService.getAvailableTonalities().subscribe(tonalidades => this.tonalidades = tonalidades);
    this.requestForm = new FormGroup({
      'movementTitle': new FormControl('', Validators.minLength(3)),
      'movementNumber': new FormControl('', Validators.required),
      'measures': new FormControl('', Validators.pattern('[0-9]*')),
      'instrumentos': new FormControl(Validators.required),
      'tonalidad': new FormControl('', Validators.required),
      'compas': new FormControl(''),
    });
  }

  submit(request: FormGroup) {
    if (request.valid) {
      const specs: Specs = request.value;
      specs.authors = ['Javier Olmo Injerto'];
      this.userService.postSheetRequest(specs, 1).subscribe(
        sheet => {
          this.showToast('Tu composición se ha puesto a la cola. Dentro de poco estará disponible', 'Solicitud creada!', 'top-right', 'success');
        },
        error => {
          this.showToast('El servidor no ha podido procesar tu solicitud', 'Error en el servidor!', 'top-right', 'danger');
        });
    } else {
        this.showToast('Parámetros incorrectos', 'Error', 'top-right', 'warning');
    }
  }

  showToast(message, title, position, status) {
    this.toastrService.show(message, title, { position, status });
  }

}

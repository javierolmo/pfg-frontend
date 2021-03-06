import { Component } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      UNED Ingeniería Informática  |  Javier Olmo Injerto   |  correo: jolmo60@alumno.uned.es
    </span>
    <a [href]=documentationUrl>API</a>
    <!--
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
    -->
  `,
})
export class FooterComponent {

  documentationUrl = environment.apiUrl + '/swagger-ui/';
}

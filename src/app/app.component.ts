/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import {NbIconLibraries} from '@nebular/theme';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor (private iconsLibrary: NbIconLibraries) {

    this.iconsLibrary.registerSvgPack('myicons', {
      'logo-24': '<object style="height: 24px" data="/assets/images/favicon.svg"></object>',
      'logo-32': '<object style="height: 32px" data="/assets/images/favicon.svg"></object>',
      'logo-48': '<object style="height: 48px" data="/assets/images/favicon.svg"></object>',
    });

  }

  ngOnInit(): void {
    // Vacío
  }
}

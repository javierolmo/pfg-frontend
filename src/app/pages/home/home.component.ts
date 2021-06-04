import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public appname: string = environment.appname;
  public appversion: string = environment.appversion;

  ngOnInit(): void {
    // Vacío
  }

}

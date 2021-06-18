import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../@core/data/user';

@Component({
  selector: 'ngx-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit(): void {
  }

}

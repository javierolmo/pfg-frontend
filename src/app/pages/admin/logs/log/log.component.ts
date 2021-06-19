import {Component, Input, OnInit} from '@angular/core';
import {Log} from '../../../../@core/data/log';

@Component({
  selector: 'ngx-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {

  @Input()
  log: Log;

  constructor() {
    // Not empty
  }

  ngOnInit(): void {
    // Not empty
  }

  toNebularStatus(slf4jStatus: string) {
    switch (slf4jStatus) {
      case 'INFO': return 'basic';
      case 'WARN': return 'warning';
      case 'ERROR': return 'danger';
      case 'FATAL': return 'danger';
      default: return 'basic';
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {User} from '../../@core/data/user';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  constructor(private authService: NbAuthService) { }

  ngOnInit(): void {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user.name = token.getPayload()['name'];
        this.user.surname = token.getPayload()['surname'];
        this.user.email = token.getPayload()['email'];
        this.user.id = token.getPayload()['id'];
        console.log(this.user);
      }
    });
  }

}

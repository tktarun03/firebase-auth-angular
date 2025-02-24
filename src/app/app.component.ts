import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  signUp() {
    this.authService.signUp(this.email, this.password)
      .then(res => console.log('User Registered!', res))
      .catch(err => console.log(err));
  }

  signIn() {
    this.authService.signIn(this.email, this.password)
      .then(res => console.log('User Logged In!', res))
      .catch(err => console.log(err));
  }

  signOut() {
    this.authService.signOut()
      .then(() => console.log('User Logged Out!'));
  }
}
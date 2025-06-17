import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username = '';
  password = '';
  showLogin = false;

  constructor(private userService: UserService, private router: Router) {}

  onLogin() {
    const user = this.userService.validateUser(this.username, this.password);
    if (user) {
    // ✅ Mark user as logged in
    this.userService.setLoggedIn(true);

    if (user) {
      if (user.role === 'admin') {
        this.router.navigate(['/admin']);
      } else if (user.role === 'employee') {
        this.router.navigate(['/employee']);
      }
    } else {
      alert('❌ Invalid username or password. Please try again.');
    }
  }
}
}

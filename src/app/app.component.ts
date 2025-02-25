import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngo';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  onLoginClick() {
    // Handle login click
    console.log('Login button clicked');
    this.router.navigate(['login']);
  }

  updateTitle() {
    const currentRoute = this.router.url;
    if (currentRoute === '/') {
      this.title = 'Home';
    } else if (currentRoute === '/about') {
      this.title = 'About';
    } else if (currentRoute === '/notice') {
      this.title = 'Notice';
    } else {
      this.title = 'My App';
    }
  }
}

import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome to YPDSN !!!';
  footer:any = {};
  menuItems = [{
    name:'Home',
    icon:'home',
    url:'/'
  },{
    name:'About',
    icon:'info',
    url:'/about'
  },{
    name:'Notice',
    icon:'announcement',
    url:'/notice'
  },{
    name:'Partners',
    icon:'handshake',
    url:'/partners'
  },{
    name:'Contact Us',
    icon:'contact_page',
    url:'/contact'
  }]

  constructor(private router: Router, private dataService: HttpService) {}
  

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
    this.dataService.getContactUs().subscribe(events => {
      if(events && events.length > 0) {
        this.footer = events[0];
      }
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
      //this.title = 'Home';
    } else if (currentRoute === '/about') {
      //this.title = 'About';
    } else if (currentRoute === '/notice') {
      //this.title = 'Notice';
    } else {
     // this.title = 'My App';
    }
  }
}

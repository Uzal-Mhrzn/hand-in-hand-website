import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {
  recentNews = [
    { title: 'News 1', description: 'This is a short description for news 1.' },
    { title: 'News 2', description: 'This is a short description for news 2.' },
    { title: 'News 3', description: 'This is a short description for news 3.' }
  ];

  upcomingEvents:any = [
  ];

  slides = [
    { image: 'https://via.placeholder.com/800x400?text=Slide+1' },
    { image: 'https://via.placeholder.com/800x400?text=Slide+2' },
    { image: 'https://via.placeholder.com/800x400?text=Slide+3' }
  ];

  customOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  };

  constructor(private dataService: HttpService) { }

  getEventImages(event:any){
    this.dataService.getUpcomingEventImages(event.id).subscribe(images => {
      event.images = images;
    });
  }

  ngOnInit(): void {

    this.dataService.getUpcomingEvents().subscribe(events => {
      this.upcomingEvents = events;
    });
  }
}

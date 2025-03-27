import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  standalone:false,
  styleUrl: './contact-us.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private dataService: HttpService) {}
  aboutUs:any = {}
  formGroup:FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit(): void {
    this.dataService.getAboutUs().subscribe(events => {
      if(events && events.length > 0) {
        this.aboutUs = events[0];
      }
    });
  }

}

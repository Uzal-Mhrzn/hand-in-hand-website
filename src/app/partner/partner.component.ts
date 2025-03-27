import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'partner',
  templateUrl: './partner.component.html',
  standalone:false,
  styleUrl: './partner.component.scss'
})
export class PartnerComponent implements OnInit {
  constructor(private dataService: HttpService) {}
  partners:any[] = [];
  displayedColumns: string[] = ['name', 'designation','designatedFrom', 'address', 'email', 'contact'];
  ngOnInit(): void {
    this.dataService.getOfficiers().subscribe(events => {
      if(events && events.length > 0) {
        this.partners = events;
      }
    });
  }

}

import { Component } from '@angular/core';
import { NoticeDialogComponent } from '../notice-dialog/notice-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notices',
  standalone: false,
  templateUrl: './notices.component.html',
  styleUrl: './notices.component.scss'
})
export class NoticesComponent {
  notices = [
    {
      title: 'Notice 1',
      image: 'https://via.placeholder.com/300',
      description: 'This is a short description for notice 1.',
      fullDescription: 'This is the full description for notice 1.'
    },
    {
      title: 'Notice 2',
      image: 'https://via.placeholder.com/300',
      description: 'This is a short description for notice 2.',
      fullDescription: 'This is the full description for notice 2.'
    },
    {
      title: 'Notice 3',
      image: 'https://via.placeholder.com/300',
      description: 'This is a short description for notice 3.',
      fullDescription: 'This is the full description for notice 3.'
    }
  ];

  constructor(public dialog: MatDialog) {}


  openDialog(notice: any): void {
    this.dialog.open(NoticeDialogComponent, {
      data: notice
    });
  }
}

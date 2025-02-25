import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notice-dialog',
  standalone: false,
  templateUrl: './notice-dialog.component.html',
  styleUrls: ['./notice-dialog.component.scss']
})
export class NoticeDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,    
  public dialogRef: MatDialogRef<NoticeDialogComponent>,
) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
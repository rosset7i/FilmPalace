import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {NotificationService} from 'src/app/notification.service';

@Component({
  selector: 'app-message',
  template: '',
})
export class MessageComponent {
  constructor(
    private notificationService: NotificationService,
    private snackBar: MatSnackBar) {
    this.notificationService.getMessage().subscribe((msg) => {
      this.snackBar.open(msg, 'Fechar', {duration: 3000});
    });
  }
}

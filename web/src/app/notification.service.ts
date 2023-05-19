import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  subject = new Subject<string>();

  constructor() {
  }

  sendMessage(message: string) {
    this.subject.next(message);
  }

  getMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}

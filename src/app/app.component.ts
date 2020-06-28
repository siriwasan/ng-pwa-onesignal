import { Component } from '@angular/core';

import { OneSignalService } from './onesignal/one-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public readonly onesignal: OneSignalService) {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    (<any>window).ngxOnesignal = onesignal;
  }

  onSubscribe(): void {
    this.onesignal.subscribe();
  }

  onUnSubscribe(): void {
    this.onesignal.unsubscribe();
  }
}

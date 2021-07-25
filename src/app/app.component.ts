import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {MediaChange, MediaObserver} from "@angular/flex-layout";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tankstellen-client';
  // @ts-ignore
  mediaSub: Subscription;
  // @ts-ignore
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) {
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
  }
}

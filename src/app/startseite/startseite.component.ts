import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Tankstelle} from '../shared/model/tankstelle';
import {Preise} from '../shared/model/preise';
import {TankstelleService} from '../shared/service/tankstelle.service';
import {PreiseService} from '../shared/service/preise.service';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {

  mediaSub: Subscription | undefined;
  deviceXs: boolean | undefined;

  tankstellen: Tankstelle[] | undefined;
  preise: Preise[] = [];

  constructor(public mediaObserver: MediaObserver, private tankstellenService: TankstelleService,
              private preiseService: PreiseService) {
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe((result: MediaChange) => {
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
    this.tankstellenService.getAlleTankstellen().subscribe(
      (value: any[]) => {
        this.tankstellen = value;
        this.tankstellen.sort((a, b) => (a.name < b.name ? -1 : 1));
        this.tankstellen.forEach(value1 => {
          this.preiseService.getAktuellerPreisFuerTankstelle(value1.tankstelleId).subscribe(
            (value2: any) => {
              this.preise.push(value2);
              this.preise.sort((a, b) => (a.tankstelle.name > b.tankstelle.name ? -1 : 1));
            }
          );
        });
      }
    );
  }

}

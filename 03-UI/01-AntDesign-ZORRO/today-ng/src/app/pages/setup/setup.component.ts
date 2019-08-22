import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {INIT_FLAG, START_USING_DATE, USERNAME} from '../../services/local-storage/local-storage.namespace';
import {getTodayTime} from '../../../utils/time';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.styl']
})
export class SetupComponent implements OnInit {
  username: string;

  constructor(private store: LocalStorageService) {
  }

  ngOnInit() {
  }

  completeSetup(): void {
    this.store.set(INIT_FLAG, true);
    this.store.set(START_USING_DATE, getTodayTime());
    this.store.set(USERNAME, this.username);
  }
}

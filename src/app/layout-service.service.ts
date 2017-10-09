import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class LayoutService {
  private _isMenuHidden = false;
  isMenuHidden = new ReplaySubject<boolean>(1);

  constructor() {
    this.isMenuHidden.next(this._isMenuHidden);
  }

  toggleSideMenu() {
    this._isMenuHidden = !this._isMenuHidden;
    this.isMenuHidden.next(this._isMenuHidden);
  }

}

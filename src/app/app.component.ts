import { Component } from '@angular/core';
import { LayoutService } from './layout-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menuCollapsed = false;
  constructor(private layoutService: LayoutService) {
    layoutService.isMenuHidden.subscribe(value => {
      this.menuCollapsed = value;
    });
  }


}

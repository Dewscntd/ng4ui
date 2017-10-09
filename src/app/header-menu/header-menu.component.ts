import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout-service.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  toggleSideMenu() {
    this.layoutService.toggleSideMenu();
  }

}

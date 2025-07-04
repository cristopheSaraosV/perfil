import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../../services/sidenav-service';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule,RouterOutlet, MatButtonModule,MatIconModule],
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss']
})
export class Sidenav {
  showFiller = false;

  @ViewChild('drawer', { read: MatSidenav, static: false })
  set drawer(drawer: MatSidenav) {
    this.sidenavService.setDrawer(drawer);
  }

  constructor(private sidenavService: SidenavService) { }

  toggleFiller() {
    this.showFiller = !this.showFiller;
  }
}

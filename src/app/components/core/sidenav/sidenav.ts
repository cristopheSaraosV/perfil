import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav-service';
import { MatNavList } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Toolbar } from '../toolbar/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule,MatIconModule,Toolbar,MatButtonModule,Sidebar],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss'
})
export class Sidenav implements AfterViewInit{
 @ViewChild('drawer', { static: true }) drawer!: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.drawer);
  }
}

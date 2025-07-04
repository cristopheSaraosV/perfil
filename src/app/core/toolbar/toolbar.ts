import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../../services/sidenav-service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  constructor(private sidenavService: SidenavService) {}

  openMenu() {
    this.sidenavService.toggle();
  }
}

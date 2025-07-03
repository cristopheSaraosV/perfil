import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavService } from '../../../services/sidenav-service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  sidenavService =inject(SidenavService)

  toggleSidenav(): void {
    this.sidenavService.toggle();
  }
}

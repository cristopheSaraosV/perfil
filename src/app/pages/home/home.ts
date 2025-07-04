import { Component } from '@angular/core';
import { Skills } from '../../components/skills/skills';

@Component({
  selector: 'app-home',
  imports: [Skills],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}

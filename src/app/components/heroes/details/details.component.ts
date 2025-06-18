import { Component, Input } from '@angular/core';
import { Hero, UniverseEnum } from '../hero/hero.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  @Input() hero?: Hero | null = null;
  universe = UniverseEnum;
}

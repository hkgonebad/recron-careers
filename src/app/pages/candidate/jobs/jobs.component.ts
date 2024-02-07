import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixStarFill, remixMapPin2Fill } from '@ng-icons/remixicon';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
  providers: [provideIcons({remixStarFill, remixMapPin2Fill})]
})
export class JobsComponent {

}

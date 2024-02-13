import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixEyeFill } from '@ng-icons/remixicon';

@Component({
  selector: 'app-drop-box-listing',
  standalone: true,
  imports: [NgIconComponent, RouterModule],
  templateUrl: './drop-box-listing.component.html',
  styleUrl: './drop-box-listing.component.scss',
  providers: [provideIcons({ remixEyeFill })],
})
export class DropBoxListingComponent {

}

import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixTwitterFill, remixInstagramFill, remixFacebookFill, remixLinkedinBoxFill } from '@ng-icons/remixicon';

interface ISocials {
  name: string
  icon: string
  url: string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  providers: [provideIcons({remixTwitterFill, remixInstagramFill, remixFacebookFill, remixLinkedinBoxFill })]
})
export class FooterComponent {
  // Social items
  socialItems : ISocials[] = [
    {
      name: 'Twitter',
      icon: 'remixTwitterFill',
      url: 'https://twitter.com'
    },
    {
      name: 'Instagram',
      icon: 'remixInstagramFill',
      url: 'https://twitter.com'
    },
    {
      name: 'Facebook',
      icon: 'remixFacebookFill',
      url: 'https://twitter.com'
    },
    {
      name: 'Linkedin',
      icon: 'remixLinkedinBoxFill',
      url: 'https://twitter.com'
    },
  ]

}

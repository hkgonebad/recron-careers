import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixSendPlaneFill, remixTwitterFill, remixInstagramFill, remixFacebookFill, remixLinkedinBoxFill } from '@ng-icons/remixicon';

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
  providers: [provideIcons({ remixSendPlaneFill, remixTwitterFill, remixInstagramFill, remixFacebookFill, remixLinkedinBoxFill })]
})
export class FooterComponent {

  // Footer Links with Categories
  linkCategories = [
    {
      title: 'Products',
      links: [
        { name: 'Fibers & Yarns', url: '/fibers-yarns' },
        { name: 'Fabrics', url: '/fabrics' },
        { name: 'PET', url: '/pet' },
      ],
    },
    {
      title: 'Brands & Applications',
      links: [
        { name: 'Recroflex', url: '/recroflex' },
        { name: 'Relive', url: '/relive' },
        { name: 'Cotfeel', url: '/cotfeel' },
        { name: 'Applications', url: '/applications' },
      ],
    },
    {
      title: 'Star Business Associates',
      links: [
        { name: 'Garment’s', url: '/garments' },
        { name: 'Fabric Processors', url: '/fabric-processors' },
        { name: 'Solution Providers', url: '/solution-providers' },
      ],
    },
    {
      title: 'CSR',
      links: [
        { name: 'CSR Activities', url: '/csr-activities' },
        { name: 'Water Reduction', url: '/water-reduction' },
        { name: 'Carbon Footprint', url: '/carbon-footprint' },
      ],
    },
    {
      title: 'Additional',
      links: [
        { name: 'About Us', url: '/about-us' },
        { name: 'Innovation', url: '/innovation' },
        { name: 'Sustainability', url: '/sustainability' },
        { name: 'News Room', url: '/news-room' },
        { name: 'Contact Us', url: '/contact-us' },
      ],
    },
  ];
  
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

  // Privacy Links
  privacyItems = [
    { name: 'Privacy policy', url: 'https://twitter.com'},
    { name: 'FAQ’s', url: 'https://twitter.com'},
    { name: 'Terms of service', url: 'https://twitter.com'}
  ]

  year = new Date().getFullYear()
}

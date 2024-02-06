import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixUserLine } from '@ng-icons/remixicon';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent, RouterModule],
  viewProviders: [provideIcons({ remixUserLine })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  isNavOpen = false
  logoImg = 'assets/img/logo.svg'
  menuItems = [
    {name: "About Us", path: '/about'},
    {name: "Products", path: '/careers'},
    {name: "Sustainability", path: '/sustainability'},
    {name: "Careers", path: '/careers'}
  ]


  // Toggle Menu
  toggleNav() {
    this.isNavOpen = !this.isNavOpen
  }
 
  // Login Modol
  
}

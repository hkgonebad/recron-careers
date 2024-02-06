import { Component, TemplateRef, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixUserLine } from '@ng-icons/remixicon';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  private modalService = inject(NgbModal);

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
  openModal(login: TemplateRef<any>) {
		this.modalService.open(login, { size: 'lg' });
	}
}

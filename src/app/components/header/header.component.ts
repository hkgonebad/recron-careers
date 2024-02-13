import { Component, TemplateRef, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixUserLine, remixMenu3Line } from '@ng-icons/remixicon';

import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent, NavbarComponent],
  viewProviders: [provideIcons({ remixUserLine, remixMenu3Line })],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  private modalService = inject(NgbModal);
  private offcanvasService = inject(NgbOffcanvas);

  isNavOpen = false
  logoImg = 'assets/img/logo.svg'
  

  // Toggle Menu
  toggleNav(navMenu: TemplateRef<any>) {
		this.offcanvasService.open(navMenu, { position: 'end' });
	}
 
  // Login Modol
  openModal(login: TemplateRef<any>) {
		this.modalService.open(login, { size: 'lg' });
	}
}

import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgOptimizedImage } from '@angular/common'

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixUserLine } from '@ng-icons/remixicon';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent, RouterModule],
  viewProviders: [provideIcons({ remixUserLine }), BsModalService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  logoImg = 'assets/img/logo.svg'

  menuItems = [
    {name: "About Us", path: '/about'},
    {name: "Products", path: '/careers'},
    {name: "Sustainability", path: '/sustainability'},
    {name: "Careers", path: '/careers'}
  ]

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
  }
}

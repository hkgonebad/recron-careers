import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
    {name: "About Us", path: '/about'},
    {name: "Products", path: '/careers'},
    {name: "Sustainability", path: '/sustainability'},
    {name: "Careers", path: '/'}
  ]
}

import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Icon } from '../icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Icon],
  templateUrl: './navbar.html'
})
export class Navbar {
  protected readonly navLinks = [
    { label: 'About Us', fragment: 'about' },
    { label: 'Services', fragment: 'services' },
    { label: 'Products', fragment: 'products' }
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}

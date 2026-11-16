import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html'
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly sectionLinks = [
    { label: 'About Us', fragment: 'about' },
    { label: 'Services', fragment: 'services' },
    { label: 'Products', fragment: 'products' },
    { label: 'Contact Us', fragment: 'contact' }
  ];

  protected readonly legalLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Code of Conduct', path: '/code-of-conduct' }
  ];
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CONTACT_EMAIL, LegalDocument } from './legal-content';

@Component({
  selector: 'app-legal',
  imports: [RouterLink],
  templateUrl: './legal.html'
})
export class Legal {
  protected readonly doc: LegalDocument = inject(ActivatedRoute).snapshot.data['document'];
  protected readonly email = CONTACT_EMAIL;
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  host: { class: 'inline-block' }
})
export class Icon {
  readonly name = input.required<string>();
}

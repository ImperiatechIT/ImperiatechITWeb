import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Legal } from './pages/legal/legal';
import { CODE_OF_CONDUCT, PRIVACY_POLICY } from './pages/legal/legal-content';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'privacy-policy', component: Legal, data: { document: PRIVACY_POLICY } },
  { path: 'code-of-conduct', component: Legal, data: { document: CODE_OF_CONDUCT } },
  { path: '**', redirectTo: '' }
];

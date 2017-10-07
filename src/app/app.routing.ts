import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './landing/landing.module.ts' },
  { path: 'embajadores', loadChildren: './embajadores/embajadores.module.ts' },
  { path: 'ciudadanos', loadChildren: './ciudadanos/ciudadanos.module.ts' }
];

export const AppRoutes = RouterModule.forRoot(routes);

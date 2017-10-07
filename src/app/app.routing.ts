import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: './landing/landing.module.ts' }];

export const AppRoutes = RouterModule.forRoot(routes);

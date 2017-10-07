import { RouterModule, Routes } from '@angular/router';

import { CiudadanosComponent } from './ciudadanos.component';

const routes: Routes = [{ path: '', component: CiudadanosComponent }];

export const CiudadanosRoutes = RouterModule.forChild(routes);

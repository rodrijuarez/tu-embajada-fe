import { RouterModule, Routes } from '@angular/router';

import { EmbajadoresComponent } from './embajadores.component';

const routes: Routes = [{ path: '', component: EmbajadoresComponent }];

export const EmbajadoresRoutes = RouterModule.forChild(routes);

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogBrowserComponent} from '../edc-demo/pages/catalog-browser/catalog-browser.component';
import {ContractViewerComponent} from "../edc-demo/pages/contract-viewer/contract-viewer.component";
import {
  TransferHistoryViewerComponent
} from "../edc-demo/pages/transfer-history/transfer-history-viewer.component";
import { StartpageComponent } from './components/startpage/startpage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuard } from './core/authentication/auth-guard';

export const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: '',
    component: StartpageComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'meine-assets',
        component: CatalogBrowserComponent,
        data: { title: 'Meine Assets', icon: 'home', ownAssets: true },
      },
      {
        path: 'catalog-browser',
        component: CatalogBrowserComponent,
        data: { title: 'Katalog', icon: 'sim_card', ownAssets: false },
      },
      {
        path: 'contracts',
        component: ContractViewerComponent,
        data: { title: 'Käufe', icon: 'attachment' },
      },
      {
        path: 'transfer-history',
        component: TransferHistoryViewerComponent,
        data: { title: 'Downloads', icon: 'assignment' },
      },
    ],
  },
];

export const protectedRoutes = routes.filter(route => route.canActivate?.includes(AuthGuard))[0].children;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

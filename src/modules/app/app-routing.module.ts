import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogBrowserComponent} from '../edc-demo/components/catalog-browser/catalog-browser.component';
import {PolicyViewComponent} from "../edc-demo/components/policy-view/policy-view.component";
import {PublishComponent} from "../edc-demo/components/asset-viewer/publish.component";

export const routes: Routes = [
//   {
//     path: 'introduction',
//     component: IntroductionComponent,
//     data: {title: 'Getting Started', icon: 'info_outline'}
//   },
//   {
//     path: 'catalog-browser',
//     component: CatalogBrowserComponent,
//     data: {title: 'Catalog Browser', icon: 'sim_card'}
//   },
//   {
//     path: 'contracts',
//     component: ContractViewerComponent,
//     data: {title: 'Contracts', icon: 'attachment'}
//   },
//   {
//     path: 'transfer-history',
//     component: TransferHistoryViewerComponent,
//     data: {title: 'Transfer History', icon: 'assignment'}
//   },
//   {
//     path: 'contract-definitions',
//     component: ContractDefinitionViewerComponent,
//     data: {title: 'Contract Definitions', icon: 'rule'}
//   },
//   {
//     path: 'policies',
//     component: PolicyViewComponent,
//     data: {title: 'Policies', icon: 'policy'}
//   },
//   {
//     path: 'my-assets', // must not be "assets" to prevent conflict with assets directory
//     component: AssetViewerComponent,
//     data: {title: 'Assets', icon: 'upload'}
//   },
//   {
//     path: '', redirectTo: 'introduction', pathMatch: 'full'
//   }
  {
    path: 'catalog-browser',
    component: CatalogBrowserComponent,
    data: {title: 'Catalog Browser', icon: 'sim_card' }
  },
  {
    path: 'publish', // must not be "assets" to prevent conflict with assets directory
    component: PublishComponent,
    data: {title: 'Publish', icon: 'upload'}
  },
  {
    path: '', redirectTo: 'catalog-browser', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

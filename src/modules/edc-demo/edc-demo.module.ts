import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CatalogBrowserComponent} from './components/catalog-browser/catalog-browser.component';
import {TransferHistoryViewerComponent} from './components/transfer-history/transfer-history-viewer.component';
import {
  ContractDefinitionViewerComponent
} from './components/z/contract-definition-viewer/contract-definition-viewer.component';
import {IntroductionComponent} from './components/z/introduction/introduction.component';
import {RouterModule} from '@angular/router';
import {
  ContractDefinitionEditorDialog
} from './components/z/contract-definition-editor-dialog/contract-definition-editor-dialog.component';
import {
  CatalogBrowserTransferDialog
} from './components/z/catalog-browser-transfer-dialog/catalog-browser-transfer-dialog.component';
import {ContractViewerComponent} from './components/contract-viewer/contract-viewer.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SafePipe} from "./pipes/safe.pipe";
import {ReplacePipe} from "./pipes/replace.pipe";
import {AssetEditorDialog} from "./components/z/asset-editor-dialog/asset-editor-dialog.component";
import {PublishComponent} from "./components/z/asset-viewer/publish.component";

import {PolicyViewComponent} from "./components/z/policy-view/policy-view.component";
import {PolicyRuleViewerComponent} from "./components/z/policy-rule-viewer/policy-rule-viewer.component";
import {NewPolicyDialogComponent} from "./components/z/new-policy-dialog/new-policy-dialog.component";
import {ConfirmationDialogComponent} from './components/z/confirmation-dialog/confirmation-dialog.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppToolbarComponent} from "./components/frame/app-toolbar/app-toolbar.component";
import {AssetDetailsComponent} from './components/catalog-browser/asset-details/asset-details.component';
import {ContextSwitcherComponent} from "./components/frame/context-switcher/context-switcher.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatProgressBarModule,
    MatListModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  declarations: [
    CatalogBrowserComponent,
    TransferHistoryViewerComponent,
    ContractDefinitionViewerComponent,
    PublishComponent,
    AssetEditorDialog,
    IntroductionComponent,
    ContractDefinitionEditorDialog,
    CatalogBrowserTransferDialog,
    ContractViewerComponent,
    CatalogBrowserTransferDialog,
    SafePipe,
    ReplacePipe,
    PolicyViewComponent,
    PolicyRuleViewerComponent,
    CatalogBrowserTransferDialog,
    ContractViewerComponent,
    NewPolicyDialogComponent,
    IntroductionComponent,
    ConfirmationDialogComponent,
    AppToolbarComponent,
    AssetDetailsComponent,
    ContextSwitcherComponent
  ],
  exports: [
    CatalogBrowserComponent,
    TransferHistoryViewerComponent,
    ContractDefinitionViewerComponent,
    PublishComponent,
    IntroductionComponent,
    PolicyRuleViewerComponent,
    IntroductionComponent,
    NewPolicyDialogComponent,
    ContractViewerComponent
  ]
})
export class EdcDemoModule {
}

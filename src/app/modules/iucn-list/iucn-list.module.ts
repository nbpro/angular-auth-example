import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '../shared/table/table.module';
import { IucnListComponent } from './iucn-list.component';
import { Routes, RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { speciesList } from './state/iucn-state.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IUCNEffects } from './state/iucn-state.effects';

const IUCN_COMPONENT_DECLARTIONS = [IucnListComponent];


const IUCN_ROUTES: Routes = [
  { path: '' , component: IucnListComponent}
];

export const DASHBOARD_ROUTING: ModuleWithProviders = RouterModule.forChild(IUCN_ROUTES);

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    GridModule,
    DASHBOARD_ROUTING,
    EffectsModule.forFeature([IUCNEffects]),
    StoreModule.forFeature('icun-list', {speciesList})
  ],
  declarations: [...IUCN_COMPONENT_DECLARTIONS]
})
export class IucnListModule { }

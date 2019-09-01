import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListComponent } from './search-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchListEffects } from './state/search-list.effects';
import { EffectsModule } from '@ngrx/effects';
import { searchList } from './state/search-list.reducer';
import { StoreModule } from '@ngrx/store';

const ROUTES: Routes = [
  { path: '' , component: SearchListComponent}
];

export const SEARCH_ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);

@NgModule({
  imports: [
    CommonModule,
    SEARCH_ROUTING,
    EffectsModule.forFeature([SearchListEffects]),
    StoreModule.forFeature('search-list', {searchList})
  ],
  declarations: [SearchListComponent]
})
export class SearchListModule { }

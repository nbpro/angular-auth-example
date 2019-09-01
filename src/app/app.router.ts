import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'search-list', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
  { path: 'endangered', loadChildren: './modules/iucn-list/iucn-list.module#IucnListModule'},
  { path: 'search-list', loadChildren: './modules/search-list/search-list.module#SearchListModule'},
  { path: '**', redirectTo: 'login'}
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {
  enableTracing: false,
  useHash: true
});

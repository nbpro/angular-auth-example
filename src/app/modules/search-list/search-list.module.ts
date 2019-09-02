import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchListComponent } from "./search-list.component";
import { Routes, RouterModule } from "@angular/router";
import { SearchListEffects } from "./state/search-list.effects";
import { EffectsModule } from "@ngrx/effects";
import { searchList } from "./state/search-list.reducer";
import { StoreModule } from "@ngrx/store";
import { ScrollIntoViewComponent } from "./scroll-into-view/scroll-into-view.component";
import { ReactiveFormsModule } from "@angular/forms";
import { OverlayContainer, OverlayModule } from "@angular/cdk/overlay";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AutocompleteModule } from "../shared/autocomplete/autocomplete.module";
import { AutocompleteComponent } from "../shared/autocomplete/autocomplete.component";
import { SearchFilterPipe } from "./search-list-fiter.pipe";

const ROUTES: Routes = [{ path: "", component: SearchListComponent }];
export const SEARCH_ROUTING: ModuleWithProviders = RouterModule.forChild(
  ROUTES
);
@NgModule({
  imports: [
    CommonModule,
    SEARCH_ROUTING,
    ReactiveFormsModule,
    EffectsModule.forFeature([SearchListEffects]),
    StoreModule.forFeature("search-list", { searchList }),
    ReactiveFormsModule,
    OverlayModule,
    AutocompleteModule
  ],
  declarations: [
    SearchListComponent,
    ScrollIntoViewComponent,
    SearchFilterPipe
  ],
  entryComponents: [AutocompleteComponent, ScrollIntoViewComponent]
})
export class SearchListModule {}

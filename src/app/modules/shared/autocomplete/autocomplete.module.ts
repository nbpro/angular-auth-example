import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteDirective } from './autocomplete.directive';
import { AutocompleteContentDirective } from './autocomplete-content.directive';
import { OptionComponent } from './option/option.component';

const COMPONENTS = [
  AutocompleteComponent,
  AutocompleteDirective,
  AutocompleteContentDirective,
  OptionComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AutocompleteModule {
}

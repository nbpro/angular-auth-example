import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { BrowserModule } from '@angular/platform-browser';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableBodyComponent } from './table-body/table-body.component';
import { TableFooterComponent } from './table-footer/table-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent, TableHeaderComponent, TableBodyComponent, TableFooterComponent],
  exports : [TableComponent]
})
export class TableModule { }

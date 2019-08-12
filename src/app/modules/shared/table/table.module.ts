import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
  ],
  declarations: [TableComponent],
  exports : [TableComponent]
})
export class TableModule { }

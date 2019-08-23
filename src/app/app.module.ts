import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { FirstLetterUpperCasePipe } from './pipes/first-letter-upper-case.pipe';
import { TableCellComponent } from './components/table-cell/table-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FirstLetterUpperCasePipe,
    TableCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

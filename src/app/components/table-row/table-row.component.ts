import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent {

  @Input('cell') cell: any;
  @Input('column') col: any;

}

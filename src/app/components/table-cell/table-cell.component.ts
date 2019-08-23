import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit {

  @Input() value: any;
  @Input() type: any;

  constructor() { }

  ngOnInit() { }

}

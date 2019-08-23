import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() columns: any[];
  @Input() values: any[];

  constructor() { }

  ngOnInit() {
    console.log('table', this.columns, this.values)
  }

}

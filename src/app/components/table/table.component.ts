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

  trackByIndex(index: any) {
    return index;
  }

  onDelete(index: number) {
    this.values.splice(index, 1);
  }

  onEdit(cellValue: any, index: number) {
    console.log(cellValue, index)
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  colDefs: any[];
  features: any[];

  constructor(
    private dataService: DataService
  ) {
    this.colDefs = [];
    this.features = [];
  }

  ngOnInit(): void {
    this.colDefs = this.dataService.getColumns();
    this.features = this.dataService.getFeatures();
  }

}

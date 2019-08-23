import { Injectable } from '@angular/core';

const DUMMY: any[] =
[
  {
    "task": {
      "value": "Build type based data structure",
      "type": "text"
    },
    "description": {
      "value": "Design a data structure that can render fields based on type",
      "type": "input"
    },
    "completed": {
      "value": false,
      "type": "checkbox"
    }
  }
];

const COL_DEFS: any[] = [
  {
    "label": "task",
    "width": "40%"
  },
  {
    "label": "description",
    "width": "40%"
  },
  {
    "label": "completed",
    "width": "30%"
  }
];


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // column defs
  getColumns(): string[] {
    return COL_DEFS;
  }

  // row data
  getFeatures(): any[] {
    return DUMMY;
  }

}

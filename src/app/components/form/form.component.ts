import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  taskForm: FormGroup;

  taskValue: FormControl;
  taskType: FormControl;

  descriptionValue: FormControl;
  descriptionType: FormControl;

  completedValue: FormControl;
  completedType: FormControl;

  optionTypes: any[];


  constructor(
    private dataService: DataService
  ) {
    this.optionTypes = ["text", "input", "checkbox"];
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private createFormControls() {
    this.taskValue = new FormControl('', Validators.required);
    this.taskType = new FormControl(this.optionTypes[0], Validators.required);

    this.descriptionValue = new FormControl('', Validators.required);
    this.descriptionType = new FormControl(this.optionTypes[0], Validators.required);

    this.completedValue = new FormControl(false, Validators.required);
    this.completedType = new FormControl(this.optionTypes[this.optionTypes.length-1], Validators.required);
  }

  private createForm() {
    this.taskForm = new FormGroup({
      taskValue: this.taskValue,
      taskType: this.taskType,
      descriptionValue: this.descriptionValue,
      descriptionType: this.descriptionType,
      completedValue: this.completedValue,
      completedType: this.completedType
    });
  }

  onFormSubmit() {
    let { taskValue, taskType, descriptionValue, descriptionType, completedValue, completedType } = this.taskForm.value;
    const obj = {
      task: {
        value: taskValue,
        type: taskType
      },
      description: {
        value: descriptionValue,
        type: descriptionType
      },
      completed: {
        value: completedValue,
        type: completedType
      }
    };
    this.dataService.pushTask(obj) > 0 &&  this.taskForm.reset();
  }

}

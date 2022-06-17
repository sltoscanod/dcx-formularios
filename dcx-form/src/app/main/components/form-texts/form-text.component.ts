import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-text',
  templateUrl: './form-text.component.html',
  styleUrls: ['./form-text.component.css']
})
export class FormTextComponent {

  @Output() dis2 = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.dis2.emit(this.tuForm);
  }

  //#region CREATEFORM
  tuForm!: FormGroup
  createForm() {
    this.tuForm = this.fb.group({
      address: [null, [Validators.required, Validators.minLength(10),Validators.maxLength(100)]],
      address2: [null, [Validators.minLength(10),Validators.maxLength(100)]],
      postal_code: [null,[Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern('[0-9]+')]],
      description: [null,[Validators.maxLength(500)]]
    });
  }
  //#endregion



}

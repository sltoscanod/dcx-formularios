import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  tuForm!: FormGroup;

  public nombre: string = '([a-z,A-Z]+)'
  public email_valid :string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  constructor(private formBiulder: FormBuilder, public dialog: MatDialog) { }

  createForm() {
    this.tuForm = this.formBiulder.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.pattern(this.nombre),Validators.maxLength(80)]],
      second_name: [null, [Validators.maxLength(80)]],
      last_name: [null, [Validators.required, Validators.minLength(3), Validators.pattern(this.nombre),Validators.maxLength(80)]],
      mail: [null, [Validators.required, Validators.pattern(this.email_valid)]],
      birth_date: [null, [Validators.required]],
      date:[null,[Validators.required]]

    });
  }

  openDialog(): void {
    this.dialog.open(DialogContentComponent)
  }

  ngOnInit(): void {
    this.createForm();
  }

}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';
import { MatDialog } from '@angular/material/dialog';
import { DialogFinishComponent } from '../dialog-finish/dialog-finish.component';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-selects',
  templateUrl: './form-selects.component.html',
  styleUrls: ['./form-selects.component.css']
})
export class FormSelectsComponent implements OnInit {

  constructor(private fb : FormBuilder, public dialog: MatDialog) { }

  tuForm!: FormGroup;

  langCtrl = new FormControl('');

  allLanguages: string[] = ['Ingles', 'Español', 'Frances', 'Marroquí', 'Catalan', 'Aleman', 'Irlandes', 'Coreano', 'Japones', 'Rumano', 'Ruso', 'Croata'];
  LanguagesAdded: string[] = []
  selectedCountryResidence!: string;
  selectedCountryBirth!: string;


  // Chips
  countries_birth: Country[] = [
    { value: 'España', viewValue: 'España' },
    { value: 'Francia', viewValue: 'Francia' },
    { value: 'Alemania', viewValue: 'Alemania' },
    { value: 'Reino Unido', viewValue: 'Reino Unido' },
    { value: 'Marruecos', viewValue: 'Marruecos' },
    { value: 'China', viewValue: 'China' },
    { value: 'Estados Unidos', viewValue: 'Estados Unidos' },
    { value: 'Croacia', viewValue: 'Croacia' },
    { value: 'Russia', viewValue: 'Russia' },
    { value: 'Ucrania', viewValue: 'Ucrania' },
    { value: 'Andorra', viewValue: 'Andorra' },
    { value: 'Republica Checa', viewValue: 'Republica Checa' },
    { value: 'Italia', viewValue: 'Italia' },
    { value: 'Irlanda', viewValue: 'Irlanda' },
    { value: 'Grecia', viewValue: 'Grecia' },
    { value: 'Argelia', viewValue: 'Argelia' },
    { value: 'Otro', viewValue: 'Otro' },
  ];
  countries_residence: Country[] = [
    { value: 'España', viewValue: 'España' },
    { value: 'Francia', viewValue: 'Francia' },
    { value: 'Alemania', viewValue: 'Alemania' },
    { value: 'Reino Unido', viewValue: 'Reino Unido' },
    { value: 'Marruecos', viewValue: 'Marruecos' },
    { value: 'China', viewValue: 'China' },
    { value: 'Estados Unidos', viewValue: 'Estados Unidos' },
    { value: 'Croacia', viewValue: 'Croacia' },
    { value: 'Russia', viewValue: 'Russia' },
    { value: 'Ucrania', viewValue: 'Ucrania' },
    { value: 'Andorra', viewValue: 'Andorra' },
    { value: 'Republica Checa', viewValue: 'Republica Checa' },
    { value: 'Otro', viewValue: 'Otro' },
  ];

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.tuForm = this.fb.group({
      data: [null]
    });
  }

  add(item : string){
    if(this.LanguagesAdded.includes(item)){
      return;
    }else{

      this.LanguagesAdded.push(item);
    }
  }

  Remove(info: string) {
    const index = this.LanguagesAdded.indexOf(info);

    if (index >= 0) {
      this.LanguagesAdded.splice(index, 1);
    }
  }

  openDialog(){
    this.dialog.open(DialogFinishComponent)
  }

}
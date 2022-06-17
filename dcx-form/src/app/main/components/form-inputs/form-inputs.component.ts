import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Element {
  name: string;
  position: number;
  capital: number;
  nationality: string;
}

@Component({
  selector: 'app-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.css']
})
export class FormInputsComponent {

  tuForm!: FormGroup;

  @Output() tuFormOut = new EventEmitter<FormGroup>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  constructor(public dialog: MatDialog, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.createForm()
    this.tuForm.valueChanges.subscribe(()=>{
      this.tuFormOut.emit(this.tuForm);
      console.log(this.tuForm.value)

    })
  }

  ngAfterViewInit() {
    this.dataSrc.paginator = this.paginator;
  }

  //#region TABLE
  ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', capital: 1.0079, nationality: 'H'},
    {position: 2, name: 'Helium', capital: 4.0026, nationality: 'He'},
    {position: 3, name: 'Lithium', capital: 6.941, nationality: 'Li'},
    {position: 4, name: 'Beryllium', capital: 9.0122, nationality: 'Be'},
    {position: 5, name: 'Boron', capital: 10.811, nationality: 'B'},
    {position: 6, name: 'Carbon', capital: 12.0107, nationality: 'C'},
    {position: 7, name: 'Nitrogen', capital: 14.0067, nationality: 'N'},
    {position: 8, name: 'Oxygen', capital: 15.9994, nationality: 'O'},
    {position: 9, name: 'Fluorine', capital: 18.9984, nationality: 'F'},
    {position: 10, name: 'Neon', capital: 20.1797, nationality: 'Ne'},
    {position: 11, name: 'Sodium', capital: 22.9897, nationality: 'Na'},
    {position: 12, name: 'Magnesium', capital: 24.305, nationality: 'Mg'},
    {position: 13, name: 'Aluminum', capital: 26.9815, nationality: 'Al'},
    {position: 14, name: 'Silicon', capital: 28.0855, nationality: 'Si'},
    {position: 15, name: 'Phosphorus', capital: 30.9738, nationality: 'P'},
    {position: 16, name: 'Sulfur', capital: 32.065, nationality: 'S'},
    {position: 17, name: 'Chlorine', capital: 35.453, nationality: 'Cl'},
    {position: 18, name: 'Argon', capital: 39.948, nationality: 'Ar'},
    {position: 19, name: 'Potassium', capital: 39.0983, nationality: 'K'},
    {position: 20, name: 'Calcium', capital: 40.078, nationality: 'Ca'},
  ];

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSrc = new MatTableDataSource<Element>(this.ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSrc.filter = filterValue.trim().toLowerCase();
  }
  //#endregion

  issues = this.fb.group({
    Intolerant_milk: false,
    Allergic_fruits: false,
    Allergic_medicament: false,
  });

  //#region CREATEFORM
  public nombre: string = '([a-z,A-Z]+)'
  createForm() {
    this.tuForm = this.fb.group({
      first_name: [null, [Validators.required, Validators.minLength(2), Validators.pattern(this.nombre)]],
      second_name: [null],
      last_name1: [null, [Validators.required, Validators.minLength(2), Validators.pattern(this.nombre)]],
      last_name2: [null,],
      phone: [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern('[- +()0-9]+')]],
      mobile_phone: [null, [Validators.pattern('[- +()0-9]+'), Validators.minLength(9), Validators.maxLength(9)]],
      number_of_relatives: [null, [Validators.required]]
    });
  }
  //#endregion

  //#region SLIDE TOGGLE
  numbers: string[] = ['1', '2', '3', 'Más de 3'];
  public isSlideChecked: number = 0;
  public y_or_n: string[] = ['No', 'Sí'];
  public toggleEvents: string[] = [];

  toggleChanges($event: MatSlideToggleChange) {
    if ($event.checked) {
      this.isSlideChecked = 1;
      this.openDialog()

    }
    else {
      this.isSlideChecked = 0;

    }
  }

  openDialog(): void {
    this.dialog.open(DialogContentComponent);
  }
  //#endregion
}
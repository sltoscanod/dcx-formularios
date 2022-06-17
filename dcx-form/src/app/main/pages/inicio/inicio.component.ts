import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor() { }

  //#region LAZYLOAD
  selectedIndex = 0;
  onTabChange(index: number): void {
    this.selectedIndex = index;
  }
  //#endregion

  //#region DISABLE STEPPER
  disable_step!: FormGroup;
  disable_step2!: FormGroup;
  
  disStep(item: FormGroup) {
    this.disable_step = item;
    
    
  }

  disStep2(item: FormGroup) {
    this.disable_step2 = item;
  }
  //#endregion
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { FormSelectsComponent } from './components/form-selects/form-selects.component';
import { FormButtonsComponent } from './components/form-buttons/form-buttons.component';



@NgModule({
  declarations: [
    InicioComponent,
    FormInputsComponent,
    FormSelectsComponent,
    FormButtonsComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class MainModule { }

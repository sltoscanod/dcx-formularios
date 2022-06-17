import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { FormSelectsComponent } from './components/form-selects/form-selects.component';
import { FormTextComponent } from './components/form-texts/form-text.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { DialogFinishComponent } from './components/dialog-finish/dialog-finish.component';



@NgModule({
  declarations: [
    InicioComponent,
    FormInputsComponent,
    FormSelectsComponent,
    FormTextComponent,
    FormBuilderComponent,
    DialogContentComponent,
    DialogFinishComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class MainModule { }

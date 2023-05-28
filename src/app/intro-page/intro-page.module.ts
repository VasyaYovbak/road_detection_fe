import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroPageComponent} from "./intro-page.component";
import {DialogModule} from "@angular/cdk/dialog";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {FunnyDialogComponent} from './funny-dialog/funny-dialog.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [IntroPageComponent, FunnyDialogComponent
  ],
  exports: [
    IntroPageComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule
  ]
})
export class IntroPageModule {
}

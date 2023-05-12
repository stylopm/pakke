import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '@pages/panel/panel.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: PanelComponent }];

@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PanelModule { }

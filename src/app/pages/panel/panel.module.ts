import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '@pages/panel/panel.component';
import { RouterModule, Routes } from '@angular/router';
import { StatusPackagePipe } from '@helpers/pipe/status-package.pipe'

const routes: Routes = [{ path: '', component: PanelComponent }];

@NgModule({
  declarations: [
    PanelComponent,
    StatusPackagePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PanelModule { }

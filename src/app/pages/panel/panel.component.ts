import { Component } from '@angular/core';
import { PackagesService } from '@services/packages.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  data: any
  constructor(
    private ps: PackagesService,
  ) {
    this.loadPackages()  
  }

  loadPackages(){
    this.ps.list().subscribe((res) => {
      this.data= res['data']
    })
  }
}

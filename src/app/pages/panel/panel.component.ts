import { Component } from '@angular/core';
import { PackagesService } from '@services/packages.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  data: any
  pakage: any
  labelPakage = "";
  constructor(
    private ps: PackagesService,
    private toastr: ToastrService,
  ) {
    this.loadPackages()  
  }

  loadPackages(){
    this.ps.list().subscribe((res) => {
      this.data= res['data']
      this.toastr.success('Se cargo exitosamente la información');
    })
  }

  loadParcelTracking(id: string, guide: string) {
    this.labelPakage = guide
    this.ps.history(id).subscribe((res) => {
      this.pakage=res;
    })
  }
}


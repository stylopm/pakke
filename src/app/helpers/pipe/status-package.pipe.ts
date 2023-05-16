import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusP'
})
export class StatusPackagePipe implements PipeTransform {
  msg: string;

  transform(value: string, ...args: unknown[]): string {
    console.log(value);
    switch (value) {
      case "SUCCESS":
        this.msg = "Éxito"
        break;
      case "WAITING":
        this.msg = "En espera"
        break;
      case "IN_TRANSIT":
        this.msg = "En transito"
        break;
      case "ON_DELIVERY":
        this.msg = "En entrega"
        break;
        case "DELIVERED":
          this.msg = "Entregado"
          break;
      default:
        this.msg = value
        break;
    }
    return this.msg
  }

}

import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({
  name: "video"
})
export class VideoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let message;

    if (value.vu) {
      message = "v ";
    } else {
      message = "x ";
    }

    message += `${value.titre} ${moment(value.date).format("DD/MM/YYYY")} ${value.cote}`;

    return message;
  }
}

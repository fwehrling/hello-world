import { Directive, Input } from "@angular/core";

@Directive({
  selector: "p[doNothing].test"
})
export class DoNothningDirective {
  @Input("logText")
  set text(value) {
    console.log(value);
  }
  constructor() {
    console.log("Do Nothing is called");
  }
}

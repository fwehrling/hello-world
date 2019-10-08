import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, DoCheck } from "@angular/core";
import { Video } from "../interfaces/video";

@Component({
  selector: "hw-enfant",
  templateUrl: "./enfant.component.html",
  styleUrls: ["./enfant.component.css"]
})
export class EnfantComponent implements OnInit, OnChanges, DoCheck {
  @Input() videos: Video[];
  @Output() videoSelected = new EventEmitter();

  constructor() {
    console.log("constructor");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck(): void {
    if (this.videos.length > 6) {
      console.log("ngDoCheck");
    }
  }

  sendParent(value: Video) {
    this.videoSelected.emit(value);
  }
}

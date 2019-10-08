import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Video } from "../interfaces/video";

@Component({
  selector: "hw-enfant",
  templateUrl: "./enfant.component.html",
  styleUrls: ["./enfant.component.css"]
})
export class EnfantComponent implements OnInit {
  @Input() videos: Video[];
  @Output() videoSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  sendParent(value: Video) {
    this.videoSelected.emit(value);
  }
}

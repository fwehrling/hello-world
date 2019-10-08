import { Component, OnInit } from "@angular/core";
import { Video } from "../interfaces/video";
import { VideoService } from "../services/video.service";

@Component({
  selector: "hw-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videos = this.videoService.getVideo();
  }

  videoSelected(value: Video) {
    console.log("parent", value);
  }
}

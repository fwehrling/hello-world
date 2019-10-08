import { Component, OnInit } from "@angular/core";
import { Video } from "../interfaces/video";
import { VideoService } from "../services/video.service";
import { SubjectService } from "../services/subject.service";

@Component({
  selector: "hw-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  videos: Video[];

  constructor(private videoService: VideoService, private subjectService: SubjectService) {}

  ngOnInit() {
    this.videos = this.videoService.getVideo();
  }

  videoSelected(value: Video) {
    this.subjectService.setMessage(value.titre);
  }

  addVideo() {
    this.videos = [...this.videos, { titre: "test99", date: new Date(), cote: 8, vu: false }];
  }
}

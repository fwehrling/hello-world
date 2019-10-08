import { Injectable } from "@angular/core";
import { Video } from "../interfaces/video";

@Injectable({
  providedIn: "root"
})
export class VideoService {
  videos: Video[] = [
    { titre: "titre1", date: new Date("2005-07-23"), cote: 6, vu: true },
    { titre: "titre2", date: new Date("2004-03-03"), cote: 4, vu: false },
    { titre: "titre3", date: new Date("2006-05-14"), cote: 8, vu: true },
    { titre: "titre4", date: new Date("2010-10-04"), cote: 2, vu: false }
  ];

  constructor() {}

  getVideo(): Video[] {
    return this.videos;
  }
}

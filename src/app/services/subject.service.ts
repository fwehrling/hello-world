import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SubjectService {
  private message: Subject<string> = new Subject<string>();

  constructor() {}

  getMessage() {
    return this.message.asObservable();
  }

  setMessage(value: string) {
    this.message.next(value);
  }
}

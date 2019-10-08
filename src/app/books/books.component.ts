import { Component, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../services/data.service";
import { Book } from "../interfaces/book";
import { SubjectService } from "../services/subject.service";
import { Subscription } from "rxjs";
class User {
  username: string;
  password: string;
}

@Component({
  selector: "hw-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit, OnDestroy {
  isSelected: boolean;
  isHidden: boolean;
  color: string;
  background: string;

  books: Book[];
  user = new User();
  subject: Subscription;

  constructor(private dataService: DataService, private subjectService: SubjectService) {}

  register() {
    console.log(this.user);
  }

  ngOnInit() {
    this.isSelected = false;
    this.isHidden = false;
    this.color = "red";
    this.background = "yellow";
    this.books = this.dataService.getData();
    this.subject = this.subjectService.getMessage().subscribe((msg: string) => console.log("books", msg));
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }

  getAlert(msg: string, event: any): void {
    event.stopPropagation();
    alert(msg);
  }

  getDiv(msg: string): void {
    alert(msg);
  }

  getPressSpace(msg: string): void {
    alert(msg);
  }

  getVariableLocale(value: string): void {
    alert(value);
  }
}

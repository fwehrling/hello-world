import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { Book } from "../interfaces/book";
class User {
  username: string;
  password: string;
}

@Component({
  selector: "hw-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  isSelected: boolean;
  isHidden: boolean;
  color: string;
  background: string;

  books: Book[];
  user = new User();
  constructor(private dataService: DataService) {}

  register() {
    console.log(this.user);
  }

  ngOnInit() {
    this.isSelected = false;
    this.isHidden = false;
    this.color = "red";
    this.background = "yellow";
    this.books = this.dataService.getData();
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

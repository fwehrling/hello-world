import { Component, OnInit } from "@angular/core";
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

  books: object[];
  user = new User();
  constructor() {}

  register() {
    console.log(this.user);
  }

  ngOnInit() {
    this.isSelected = false;
    this.isHidden = false;
    this.color = "red";
    this.background = "yellow";

    this.books = [
      {
        name: "livre1",
        author: "author1"
      },
      {
        name: "livre2",
        author: "author2"
      },
      {
        name: "livre3",
        author: "author3"
      }
    ];
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

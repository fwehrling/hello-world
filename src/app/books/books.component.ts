import { Component, OnInit } from "@angular/core";

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

  constructor() {}

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

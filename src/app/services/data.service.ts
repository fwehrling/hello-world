import { Injectable } from "@angular/core";
import { Book } from "../interfaces/book";

@Injectable({
  providedIn: "root"
})
export class DataService {
  books: Book[] = [
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

  constructor() {}

  getData(): Book[] {
    return this.books;
  }
}

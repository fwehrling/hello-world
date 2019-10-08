import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { FruitComponent } from './fruit/fruit.component';

@NgModule({
  declarations: [AppComponent, BooksComponent, FruitComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

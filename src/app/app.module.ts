import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BooksComponent } from "./books/books.component";
import { FruitComponent } from './fruit/fruit.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { VideoPipe } from './pipes/video.pipe';

@NgModule({
  declarations: [AppComponent, BooksComponent, FruitComponent, FromNowPipe, ParentComponent, EnfantComponent, VideoPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

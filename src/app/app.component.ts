import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "hw-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  numberOfBooks = 61;
  phrase = `j'affiche ma valeur :`;

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("un titre personnalisé");
    this.meta.addTag({ name: "author", content: "Franck" });
  }
}

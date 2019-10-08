import { Component, OnInit, OnDestroy } from "@angular/core";
import { FruitService } from "../services/fruit.service";
import { Fruit } from "../interfaces/fruit";
import { SubjectService } from "../services/subject.service";
import { Subscription } from "rxjs";

@Component({
  selector: "hw-fruit",
  templateUrl: "./fruit.component.html",
  styleUrls: ["./fruit.component.css"]
})
export class FruitComponent implements OnInit, OnDestroy {
  fruits: Fruit[];
  subject: Subscription;

  constructor(private fruitService: FruitService, private subjecService: SubjectService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
    this.subject = this.subjecService.getMessage().subscribe((msg: string) => console.log("fruit", msg));
  }

  ngOnDestroy(): void {
    this.subject.unsubscribe();
  }
}

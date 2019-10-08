import { Component, OnInit } from "@angular/core";
import { FruitService } from "../services/fruit.service";
import { Fruit } from "../interfaces/fruit";

@Component({
  selector: "hw-fruit",
  templateUrl: "./fruit.component.html",
  styleUrls: ["./fruit.component.css"]
})
export class FruitComponent implements OnInit {
  fruits: Fruit[];

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}

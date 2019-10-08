import { Injectable } from "@angular/core";
import { Fruit } from "../interfaces/fruit";

@Injectable({
  providedIn: "root"
})
export class FruitService {
  fruits: Fruit[] = [{ name: "banane", color: "jaune" }, { name: "pomme", color: "vert" }, { name: "cerise", color: "rouge" }];

  constructor() {}

  getFruits(): Fruit[] {
    return this.fruits;
  }
}

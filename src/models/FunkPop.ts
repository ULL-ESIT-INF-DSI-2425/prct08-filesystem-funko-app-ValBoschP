import { funkoGenre } from "../enums/FunkoGenre.js";
import { funkoType } from "../enums/FunkoType.js";


export class Funko {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public type: funkoType,
    public genre: funkoGenre,
    public franchise: string,
    public number: number,
    public exclusive: boolean,
    public specialFeatures: string,
    public marketValue: number,
  ) {}

  get Funko(): Funko {
    return this;
  }
  printInfo(): void {
    console.log(`
      ID: ${this.id}
      Name: ${this.name}
      Description: ${this.description}
      Type: ${this.type}
      Genre: ${this.genre}
      Franchise: ${this.franchise}
      Number: ${this.number}
      Exclusive: ${this.exclusive}
      Special Features: ${this.specialFeatures}
      Market Value: ${this.marketValue}
    `);
  }
}
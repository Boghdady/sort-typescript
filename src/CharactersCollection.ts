import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
  
  constructor(public data: string){}

  get length() : number {
    return this.data.length;
  }

  compare(leftIndex:number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Convert string to array of characters
    const characters : string[] = this.data.split('');
    // Swap
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    // Convert array of string to string
    this.data = characters.join('');

  }

}
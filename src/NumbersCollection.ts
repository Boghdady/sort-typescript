import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable {
  // data is the numbers that we want to sort it
  constructor(public data: number[])  { }

  // Return the length of the collection
  get length(): number {
    return this.data.length;
  }
  
  // Compare between two numbers
  compare(leftIndex: number, rightIndex:number) : boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // Swap two numbers
  swap(leftIndex: number, rightIndex: number) :void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  } 
  
}
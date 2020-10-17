import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollections = new NumbersCollection([4,-2,1,6]);

const sorter = new Sorter(numbersCollections);

sorter.sort();
console.log(numbersCollections.data);
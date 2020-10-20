import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([4,-2,1,6]);
const charactersCollection = new CharactersCollection('yda');
// const sorter = new Sorter(numbersCollection);
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
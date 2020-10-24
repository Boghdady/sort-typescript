import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const numbersCollection = new NumbersCollection([4,-2,1,6]);
// const charactersCollection = new CharactersCollection('yda');
// // const sorter = new Sorter(numbersCollection);
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(24);
linkedList.add(-4);
linkedList.add(-10);

const sorter = new Sorter(linkedList);
sorter.sort();

linkedList.print();


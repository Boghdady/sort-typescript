"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var Sorter_1 = require("./Sorter");
var numbersCollections = new NumbersCollection_1.NumbersCollection([4, -2, 1, 6]);
var sorter = new Sorter_1.Sorter(numbersCollections);
sorter.sort();
console.log(numbersCollections.data);

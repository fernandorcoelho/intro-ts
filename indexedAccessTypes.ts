// Indexed Access Types - Acessar uma propriedade específica em outro tipo

import { publication1 } from "./data";
import { Publication } from "./models";

const author = publication1["author"];
console.log(author);

type Author = Publication['author']

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof MyArray)[number];

const person: Person = {
  name: "Fernando",
  age: 31,
};

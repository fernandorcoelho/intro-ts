// Type Aliases (type) and Interface

// Em geral, interface é mais performática do que type
interface Person { firstName: string, lastName: string };

interface User extends Person {
  email: string;
};

// interface Person { firstName: string, lastName: string };

// // Quando redeclara uma interface, ela faz o merge com a anterior
// // Não é usado no dia-a-dia
// interface Person {
//   age?: number;
// }

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

// Structural type system => Sistema de tipo estrutural
const person: User = {
  firstName: "Fernando",
  lastName: "Coelho",
  email: "fernando.ufv14@gmail.com"
};

const fullName = getFullName(person);
console.log(fullName)

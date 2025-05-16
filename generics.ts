// Generics (genéricos) - Capacidade de criar código (função, classes, tipos)
// que funcionam em uma variedade de tipos ao invés de apenas um

// Type Variable => variável de tipo
function identity<Type>(arg: Type): Type {
  return arg;
}

const argString: string = "value";

// Com o generics, quando passa um number, o retorno é um number, quando passa
// uma string o retorno é uma string
// Abaixo, o tipo é inferido pelo valor literal (string e number, respectivamente)
// const value = identity("hello world");
// const value2 = identity(2);

const value = identity(argString);
                      // O Typescript consegue carregar valores para o tipo
                      // também, que seria o <Type> na definição da função
const value2 = identity<number>(2);

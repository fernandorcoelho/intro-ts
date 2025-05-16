// Generic Constraints - Restrições Genéricas
// genérico, mas nem tanto

type TypeConstraints = {
  length: number;
}

// Neste caso, a restrição é que a propriedade passada tenha length
// Tem que respeitar tanto no nome quanto no tipo da propriedade
function loggingIdentity<Type extends TypeConstraints>(arg: Type): Type {
  console.log(arg);
  return arg;
}

const value: string = "value";

loggingIdentity(value);
loggingIdentity([3, 34]);

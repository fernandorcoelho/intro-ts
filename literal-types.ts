// Tipos Literais - Literal Types
// Uma variável pode fazer parte de um conjunto específico de string ou number
// Especificamos literalmente os valores que queremos na tipagem
// Ex.: Direction => left, top, right and bottom

// type Direction = 'left' | 'top' | 'right' | 'bottom';

// const value: Direction = 'left';

// function moveTo(direction: Direction) {
//   switch (direction) {
//     case 'left':
//       console.log("move to the left")
//       break;
//     case 'right':
//       console.log("move to the right")
//       break;
//     case 'top':
//       console.log("move to the top")
//       break;
//     case 'bottom':
//       console.log("move to the bottom")
//       break;
  
//     default:
//       console.log("I don't know where to go :(");
//   }
// }

// moveTo("right");

type METHOD = "GET" | "POST";
// A palavra-chave declare é usada em TypeScript para informar ao compilador que
// essa função existe, mas ela será implementada em outro lugar (como em arquivos .d.ts ou bibliotecas externas);
// A implementação pode estar em outro lugar (como em uma lib ou no JavaScript puro).
declare function handleRequest(url: string, method: METHOD): void;

const req: { url: string; method: METHOD } = { url: "https://example.com", method: "GET" };
// const req: {
//   url: string;
//   method: string;
// }
// Como é um objeto, o Javascript entende que poderia mudar o valor de uma
// das propriedades ao longo do código.

handleRequest(req.url, req.method);

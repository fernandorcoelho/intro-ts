// null (nulo) => representa ausência de valor
// undefined (não definido) => nenhum valor foi atribuído

let value1;
console.log(typeof value1);
// retorna undefined

value1 = null;
console.log(typeof value1);
// retorna object (bug do Javascript)

function hello(value: string | null | undefined) {
  if (value) {
    console.log("Hello, " + value.toUpperCase());
  }
}

hello("Fernando");
hello(null);

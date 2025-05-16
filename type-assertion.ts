/**
 * Afirmações de Tipo - Type Assertions
 * palavra "as" - "como"
 * 
 * Às vezes, você terá informações sobre o
 * tipo de um valor que o TypeScript não consegue reconhecer.
 */

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    zipCode: string;
  };
};

const value = { firstName: "Lucas" } as Person; // recomendado usar o "as"
// const value = <Person>{};

// 1- Algo que acontece em tempo de execução ou fator externo
// Ex.: Quando recebemos dados de uma requisição para a API e o tipo da response
// não consegue ser inferido.
value.lastName = "Lucas";

// 2- Criando mocks para testes automatizados
// Ex.: Quando queremos testar apenas uma parte específica do objeto

console.log(value.firstName);

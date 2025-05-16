// Parecido com o Literal Types
// Define um subconjunto de valores
// Por debaixo dos panos, o Typescript automaticamente atribui um valor numérico
// para esses itens, caso não atribuímos por conta própria.
enum Direction {
  LEFT = 'left',       // 0
  RIGHT = 'right',     // 1
  TOP = 'top',         // 2
  BOTTOM = 'bottom',   // 3
};

function moveTo(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("Move to the " + Direction.LEFT)
      break;
    case Direction.RIGHT:
      console.log("Move to the " + Direction.RIGHT)
      break;
    case Direction.TOP:
      console.log("Move to the " + Direction.TOP)
      break;
    case Direction.BOTTOM:
      console.log("Move to the " + Direction.BOTTOM)
      break;
  
    default:
      console.log("I don't know where to go :(");
  }
}

moveTo(Direction.BOTTOM);

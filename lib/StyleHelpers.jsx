const getBoardStyle = (squares, squareSize) => {
  let size = squares * squareSize;

  return {
    height: size,
    width: size
  };
};

const getCheckerStyle = (placement, squares, squareSize) => {
  if(placement === -1) {
    return { display: 'none' };
  } else {
    let padding = (squareSize - 45) / 2; // Take size of square, subtract size of checker, divide by two to put in middle

    let column = placement % squares;
    let row = Math.floor(placement / squares);

    let left = (column * squareSize) + padding;
    let top = (row * squareSize) + padding + 56; // Add 56 for instructions box

    return { left: left, top: top };
  }
};

const getControlStyle = (squares, squareSize) => {
  let size = squares * squareSize;

  return {
    margin: '8px 0',
    textAlign: 'center',
    width: size
  };
};

const getInstructionsStyle = (squares, squareSize) => {
  let size = squares * squareSize;

  return {
    fontSize: 16,
    fontWeight: 'bold',
    height: 40,
    margin: '8px 0',
    textAlign: 'center',
    width: size
  };
};

module.exports = {
  getBoardStyle,
  getCheckerStyle,
  getControlStyle,
  getInstructionsStyle
};

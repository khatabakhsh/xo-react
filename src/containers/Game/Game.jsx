/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { Square, Grid } from '../../components';

function Game({ squares, setSquares, turn, win }) {
  return (
    <Grid>
      {Object.keys(squares).map((squareIndex) => {
        return (
          <Square
            letter={squares[squareIndex]}
            squares={squares}
            setSquares={setSquares}
            index={Number(squareIndex)}
            turn={turn}
            win={win}
            // don't use index of map. squareIndex is string and unique.
            key={squareIndex}
          />
        );
      })}
    </Grid>
  );
}
export default memo(Game);

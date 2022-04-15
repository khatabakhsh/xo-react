import React, { useState } from 'react';
import { Square, Grid } from '../../components';

function Game() {
  const [letters, setLetters] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  });
  const level = Object.values(letters).filter((item) => item !== '').length;
  return (
    <Grid>
      {Object.keys(letters).map((letterIndex) => {
        return (
          <Square
            letter={letters[letterIndex]}
            setLetters={setLetters}
            index={Number(letterIndex)}
            key={Number(letterIndex)}
            turn={level % 2 === 0 ? 'X' : 'O'}
          />
        );
      })}
    </Grid>
  );
}
export default Game;

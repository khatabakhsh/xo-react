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
  return (
    <Grid>
      {Object.keys(letters).map((letterIndex) => {
        return (
          <Square
            letter={letters[letterIndex]}
            setLetters={setLetters}
            index={Number(letterIndex)}
            key={Number(letterIndex)}
          />
        );
      })}
    </Grid>
  );
}
export default Game;

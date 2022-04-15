import React, { useState } from 'react';
import Game from '../game/Game';

function Main() {
  return (
    <main>
      <div>players</div>
      <Game turn="x" />
    </main>
  );
}
export default Main;

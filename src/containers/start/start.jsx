import React from 'react';
import styles from './styles.module.scss';
import { Input, Button } from '../../components';

function Start() {
  return (
    <form className={styles.form} action="">
      <Input label="First Player" type="text" id="FirstPlayer" />
      <Input label="Second Player" type="text" id="SecondPlayer" />
      <Button text="Start Play" />
    </form>
  );
}
export default Start;

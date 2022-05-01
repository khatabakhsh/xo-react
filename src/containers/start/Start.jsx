/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { useTheme } from '../../contexts/theme';
import { Input, Button } from '../../components';

function Start({ title, setPlayerNames }) {
  useEffect(() => {
    document.title = `Tic-Tac-Toe : ${title}`;
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setPlayerNames(data.firstPlayer, data.secondPlayer);
    navigate('/game', { replace: true });
  };

  const { theme } = useTheme();
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label="First Player"
          name="firstPlayer"
          type="text"
          register={register('firstPlayer', {
            required: { value: true, message: '* Name required' },
            minLength: { value: 2, message: '* Name minimum 2 letters' },
            maxLength: { value: 9, message: '* Name maximum 9 letters' },
            pattern: {
              value: /^[A-Z][A-Z0-9._-]+$/gi,
              message: '* First letter must English',
            },
          })}
        />
        <p className={theme === 'light' ? styles.errorLight : styles.errorDark}>
          {errors.firstPlayer && errors.firstPlayer.message}
        </p>
      </div>
      <div>
        <Input
          label="Second Player"
          name="secondPlayer"
          type="text"
          register={register('secondPlayer', {
            required: { value: true, message: '* Name required' },
            minLength: { value: 2, message: '* Name minimum 2 letters' },
            maxLength: { value: 9, message: '* Name maximum 9 letters' },
            pattern: {
              value: /^[A-Z][A-Z0-9._-]+$/gi,
              message: '* First letter must English',
            },
            validate: (value) =>
              value !== document.getElementById('firstPlayer').value,
          })}
        />
        <p className={theme === 'light' ? styles.errorLight : styles.errorDark}>
          {errors.secondPlayer && errors.secondPlayer.message}
          {errors.secondPlayer?.type === 'validate' && '* Names must different'}
        </p>
      </div>

      <Button text="Start Play" type="submit" />
    </form>
  );
}
export default Start;

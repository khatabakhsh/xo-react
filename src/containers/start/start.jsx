/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { Input, Button } from '../../components';

function Start() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
            maxLength: { value: 12, message: '* Name maximum 12 letters' },
            pattern: {
              value: /^[A-Z][A-Z0-9._-]+$/gi,
              message: '* First letter must English',
            },
          })}
        />
        <p className={styles.error}>
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
            maxLength: { value: 12, message: '* Name maximum 12 letters' },
            pattern: {
              value: /^[A-Z][A-Z0-9._-]+$/gi,
              message: '* First letter must English',
            },
          })}
        />
        <p className={styles.error}>
          {errors.secondPlayer && errors.secondPlayer.message}
        </p>
      </div>

      <Button text="Start Play" type="submit" />
    </form>
  );
}
export default Start;

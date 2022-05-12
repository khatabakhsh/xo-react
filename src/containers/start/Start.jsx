/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { setPlayerNames } from '../../redux/players/action';
import styles from './styles.module.scss';
import { useTheme, useLang } from '../../hooks';
import { Input, Button } from '../../components';

function Start() {
  const { lang } = useLang();

  useEffect(() => {
    document.title =
      lang === 'en' ? `Tic-Tac-Toe : Let's Play` : 'بازی دوز : بیا شروع کنیم';
  }, [lang]);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(setPlayerNames(data.firstPlayer, data.secondPlayer));
    navigate('/game', { replace: true });
  };

  const { theme } = useTheme();
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          label={lang === 'en' ? 'First Player' : 'بازیکن اول'}
          name="firstPlayer"
          type="text"
          placeholder="Amir"
          register={register('firstPlayer', {
            required: true,
            minLength: 2,
            maxLength: 9,
            pattern: /^[A-Z][A-Z0-9._-]+$/gi,
          })}
        />
        <p className={theme === 'light' ? styles.errorLight : styles.errorDark}>
          {errors.firstPlayer?.type === 'required' &&
            `${
              lang === 'en' ? '* Name required' : 'وارد کردن اسم الزامی است *'
            }`}
          {errors.firstPlayer?.type === 'minLength' &&
            `${
              lang === 'en'
                ? '* Name minimum 2 letters'
                : 'کمترین مقدار 2 حرف است *'
            }`}
          {errors.firstPlayer?.type === 'maxLength' &&
            `${
              lang === 'en'
                ? '* Name maximum 2 letters'
                : 'بیشترین مقدار 9 حرف است *'
            }`}
          {errors.firstPlayer?.type === 'pattern' &&
            `${
              lang === 'en'
                ? '* Name must in English'
                : 'اسم باید به انگلیسی باشد *'
            }`}
        </p>
      </div>
      <div>
        <Input
          label={lang === 'en' ? 'Second Player' : 'بازیکن دوم'}
          name="secondPlayer"
          type="text"
          placeholder="Hossein"
          register={register('secondPlayer', {
            required: true,
            minLength: 2,
            maxLength: 9,
            pattern: /^[A-Z][A-Z0-9._-]+$/gi,
            validate: (value) =>
              value !== document.getElementById('firstPlayer').value,
          })}
        />
        <p className={theme === 'light' ? styles.errorLight : styles.errorDark}>
          {errors.secondPlayer?.type === 'required' &&
            `${
              lang === 'en' ? '* Name required' : 'وارد کردن اسم الزامی است *'
            }`}
          {errors.secondPlayer?.type === 'minLength' &&
            `${
              lang === 'en'
                ? '* Name minimum 2 letters'
                : 'کمترین مقدار 2 حرف است *'
            }`}
          {errors.secondPlayer?.type === 'maxLength' &&
            `${
              lang === 'en'
                ? '* Name maximum 2 letters'
                : 'بیشترین مقدار 9 حرف است *'
            }`}
          {errors.secondPlayer?.type === 'pattern' &&
            `${
              lang === 'en'
                ? '* Name must in English'
                : 'اسم باید به انگلیسی باشد *'
            }`}
          {errors.secondPlayer?.type === 'validate' &&
            `${
              lang === 'en'
                ? '* Names must different'
                : 'اسم‌ها باید متفاوت باشند *'
            }`}
        </p>
      </div>

      <Button text={lang === 'en' ? 'Start Play' : 'شروع بازی'} type="submit" />

      <style jsx="true">{`
        ${lang === 'en'
          ? ''
          : `p {
        font-family: 'IRANSansX';
        font-weight: 300;
        text-align: right !important;
        -moz-font-feature-settings: "ss02";
        -webkit-font-feature-settings: "ss02";
        font-feature-settings: "ss02";
      }`}
      `}</style>
    </form>
  );
}
export default Start;

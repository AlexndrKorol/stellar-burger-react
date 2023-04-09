import styles from "./Login.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authLogin } from "../../services/reducers/auth";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const name = event.target.name;

    setFormValue({
      ...formValue,
      [name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await dispatch(authLogin(formValue)).unwrap();
      if (res.success) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Вход</p>
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          value={formValue.email}
          onInput={onChange}
        />
        <Input
          placeholder="Пароль"
          type="password"
          icon={"ShowIcon"}
          name="password"
          value={formValue.password}
          onInput={onChange}
        />
        <Button htmlType="submit" type="primary" size="large">
          Войти
        </Button>

        <div className={styles.wrapper}>
          <div className={styles.bar}>
            <p className="text text_type_main-default text_color_inactive">
              Вы — новый пользователь?
            </p>
            <Button
              htmlType="button"
              type="secondary"
              extraClass={styles.button}
              size="medium"
              onClick={() => navigate("/register")}
            >
              Зарегистрироваться
            </Button>
          </div>
          <div className={styles.bar}>
            <p className="text text_type_main-default text_color_inactive">
              Забыли пароль?
            </p>
            <Button
              htmlType="button"
              type="secondary"
              extraClass={styles.button}
              size="medium"
              onClick={() => navigate("/forgot-password")}
            >
              Восстановить пароль
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

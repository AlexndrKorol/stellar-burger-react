import styles from "./Register.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <p className="text text_type_main-medium">Регистрация</p>
        <Input placeholder="Имя" type="text" />
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Пароль" type="password" icon={"ShowIcon"} />
        <Button htmlType="button" type="primary" size="large">
          Зарегистрироваться
        </Button>

        <div className={styles.bar}>
          <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
          </p>
          <Button htmlType="button" type="secondary" extraClass={styles.button} size="medium" onClick={() => navigate('/login')}>
            Войти
          </Button>
        </div>
      </form>
    </div>
  );
};

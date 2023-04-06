import styles from "./Login.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <p className="text text_type_main-medium">Вход</p>
        <Input placeholder="E-mail" type="email" />
        <Input placeholder="Пароль" type="password" icon={"ShowIcon"} />
        <Button htmlType="button" type="primary" size="large">
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
      </div>
    </div>
  );
};

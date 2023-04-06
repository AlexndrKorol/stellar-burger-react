import styles from "./ForgotPassword.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input placeholder="Укажите e-mail" type="email" />
        <Button htmlType="button" type="primary" size="large">
          Восстановить
        </Button>

        <div className={styles.wrapper}>
          <div className={styles.bar}>
            <p className="text text_type_main-default text_color_inactive">
              Вспомнили пароль?
            </p>
            <Button
              htmlType="button"
              type="secondary"
              extraClass={styles.button}
              size="medium"
              onClick={() => navigate("/reset-password")}
            >
              Войти
            </Button>
          </div> 
        </div>
      </div>
    </div>
    );
  };


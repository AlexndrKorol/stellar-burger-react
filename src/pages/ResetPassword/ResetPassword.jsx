import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input placeholder="Введите новый пароль" type="password" icon={"ShowIcon"} />
        <Input placeholder="Введите код из письма" type="text" />
        <Button htmlType="button" type="primary" size="large">
          Сохранить
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
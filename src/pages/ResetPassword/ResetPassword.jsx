import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";
import * as api from "../../utils/api";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.resetPassword({ password, token });

      if (res.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className="text text_type_main-medium">Восстановление пароля</p>
        <Input
          placeholder="Введите новый пароль"
          type="password"
          icon={"ShowIcon"}
          value={password}
          onInput={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Введите код из письма"
          type="text"
          value={token}
          onInput={(e) => setToken(e.target.value)}
        />
        <Button htmlType="submit" type="primary" size="large">
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
              onClick={() => navigate("/login")}
            >
              Войти
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

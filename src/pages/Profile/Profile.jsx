import styles from "./Profile.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { authLogout } from "../../services/reducers/auth";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      const res = await dispatch(authLogout()).unwrap();
      if (res.success) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={cn(styles.main_container, "pt-30")}>
      <nav className={cn(styles.menu, "mr-15")}>
        <Link to="/profile" className={cn(styles.link, styles.link_active)}>
          <span
            className={cn(styles.text_container, "text text_type_main-medium")}
          >
            Профиль
          </span>
        </Link>

        <Link
          to="/profile/orders"
          className={cn(
            styles.link,
            styles.link_inactive,
            "text text_type_main-medium text_color_inactive"
          )}
        >
          <span
            className={cn(styles.text_container, "text text_type_main-medium")}
          >
            История заказов
          </span>
        </Link>

        <Link
          to=""
          onClick={onLogout}
          className={cn(
            styles.link,
            styles.link_inactive,
            "text text_type_main-medium text_color_inactive mb-20"
          )}
        >
          <span
            className={cn(styles.text_container, "text text_type_main-medium")}
          >
            Выход
          </span>
        </Link>

        <p className={cn("text text_type_main-default text_color_inactive")}>
          В этом разделе вы можете
          <br />
          изменить свои персональные данные
        </p>
      </nav>

      <div className={styles.form}>
        <Input placeholder="Имя" type="text" icon={"EditIcon"} />
        <Input placeholder="Логин" type="email" icon={"EditIcon"} />
        <Input placeholder="Пароль" type="password" icon={"EditIcon"} />
      </div>

      <div className={cn(styles.menu, "ml-15")}></div>
    </div>
  );
};

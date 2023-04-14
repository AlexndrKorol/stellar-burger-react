// import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { NavLink, useMatch } from "react-router-dom";
// import styles from '../app-header/app-header.module.css';
// import cn from 'classnames';

// export const AppHeader = () => {
//   const isConstructor = !!useMatch({ path: '/', exact: 'true' });
//   const isFeed = !!useMatch('/feed');
//   const isProfile = !!useMatch('/profile');
//   const isActive = (path) => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     return useMatch(path) !== null;
//   }

//   return (
//     <header className={cn(styles.header, 'pt-4', 'pb-4')}>

//       <nav className={cn(styles.nav)}>

//         <div className={cn(styles.header__container, styles.link__container_left)}>
//           <NavLink to ="/" className={styles.link}> 
//             {isConstructor ? <BurgerIcon type='primary'/> : <BurgerIcon type='secondary'/>}  
//             <span className={
//               isActive
//               ? cn(styles.link_active, "text text_type_main-default ml-2")
//               : "text text_type_main-default ml-2"}
//               >Конструктор</span>
//           </NavLink>
//           <NavLink to ="/feed" className={styles.link}>
//             {isFeed ? <ListIcon type='primary'/> : <ListIcon type='secondary'/>}
//             <span className="text text_type_main-default ml-2"
//               >Лента заказов</span>
//           </NavLink>
//         </div>

//         <div className={cn(styles.header__container, styles.logo)}>
//           <NavLink to ="/">
//             <Logo />
//           </NavLink>
//         </div>

//           <div className={cn(styles.header__container, styles.header__container_right)}>
//             <NavLink to ="/profile" className={styles.link}>
//               {isProfile ? <ProfileIcon type='primary'/> : <ProfileIcon type='secondary'/>}
//               <span className="text text_type_main-default ml-2"
//                 >Личный кабинет</span>
//             </NavLink>
//           </div>
//       </nav>
//     </header>
//   )
// }


import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from "react-router-dom";
import styles from '../app-header/app-header.module.css';
import cn from 'classnames';

export const AppHeader = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  }

  return (
    <header className={cn(styles.header, 'pt-4 pb-4')}>
      <nav className={cn(styles.nav)}>
        <div className={cn(styles.header__container, styles.link__container_left)}>
          <NavLink to="/" className={styles.link}>
            <BurgerIcon type={isActive('/') ? 'primary' : 'secondary'} />
            <span className={cn(
              'text text_type_main-default ml-2',
              isActive('/') && styles.link_active,
            )}>Конструктор</span>
          </NavLink>
          <NavLink to="/feed" className={styles.link}>
            <ListIcon type={isActive('/feed') ? 'primary' : 'secondary'} />
            <span className={cn(
             'text text_type_main-default ml-2',
              isActive('/feed') && styles.link_active,
            )}>Лента заказов</span>
          </NavLink>
        </div>

        <div className={cn(styles.header__container, styles.logo)}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <div className={cn(styles.header__container, styles.header__container_right)}>
          <NavLink to="/profile" className={styles.link}>
            <ProfileIcon type={isActive('/profile') ? 'primary' : 'secondary'} />
            <span className={cn(
              'text text_type_main-default ml-2',
              isActive('/profile') && styles.link_active,
            )}>Личный кабинет</span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}




// import React from "react"
// import ReactDOM from 'react-dom'
// import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
// import styles from './modal.module.css'
// import cn from 'classnames';
// import ModalOverlay from "../modal-overlay/modal-overlay";

// const Modal = ({children, title}) => {
//   const close = (e)=>{
//     console.log(e.target.closest('.' + styles['container--opened']));
//     const modal = e.target.closest('.' + styles['container--opened'])
//     modal && modal.classList.remove(styles['container--opened'])
//   }

//   return ReactDOM.createPortal (
//       <>
//       <div className={cn(styles.container, styles['container--opened'])}>
//         <ModalOverlay>
//         </ModalOverlay>

//         <div className={styles.modal_content}>
//           <div className={styles.modal_info}>
//             <p className="text text_type_main-medium">
//               {title}
//             </p>
//             <CloseIcon type="primary" onClick={close}/>
//           </div>
//           {children}
//         </div>
        
//       </div> 
//       </>,
//       document.getElementById('modal-root')
//   )
// }

// export default Modal;
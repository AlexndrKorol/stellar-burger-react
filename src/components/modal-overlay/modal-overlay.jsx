import React from 'react'
import styles from '../modal-overlay/modal-overlay.module.css'

const ModalOverlay = ({onClick}) => {
  // React.useEffect(() => {
  //   function closeEsc(evt) {
  //     if (evt.key === 'Escape') {
  //       onClick();
  //     }
  //   }

  //   document.addEventListener('keydown', closeEsc);
  //   return () => {
  //     document.removeEventListener('keydown', closeEsc);
  //   };
  // }, []);

  return (
  <div onClick={onClick} className={styles.overlay}></div>
  )
}

export default ModalOverlay;

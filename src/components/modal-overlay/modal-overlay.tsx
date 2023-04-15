import { FC } from 'react';
import { TModalOverlayProps } from '../../types/modal';
import styles from '../modal-overlay/modal-overlay.module.css'


const ModalOverlay: FC<TModalOverlayProps> = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.overlay}></div>
  )
}

export default ModalOverlay;

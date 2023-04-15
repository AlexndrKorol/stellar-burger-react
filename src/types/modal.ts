import { ReactNode } from 'react';

export type TModalProps =  {
    title: string;
    onClose: () => void;
    children: ReactNode
  }

export type TModalPropsId = TModalProps & {id: string}

export type TModalOverlayProps = {
onClick: () => void;
};

export type TOrderDetails = {
    data: {
      name: string;
      order: {
        number: string;
      };
    };
  }
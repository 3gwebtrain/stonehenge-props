import { Modal } from 'antd';
import { ReactElement } from 'react';

export function ModalLogin({ children, isModal, closePop }: { children: ReactElement; isModal: boolean; closePop: () => void }) {
  return (
    <Modal title="Basic Modal" open={isModal} onCancel={() => closePop()} footer={null}>
      {children}
    </Modal>
  );
}

export default ModalLogin;

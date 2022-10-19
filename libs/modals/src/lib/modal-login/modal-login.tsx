import { Modal } from 'antd';
import { ReactElement, useEffect, useState } from 'react';

export function ModalLogin({
  children,
  modalActive,
}: {
  children: ReactElement;
  modalActive: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>();

  useEffect(() => {
    setIsModalOpen(modalActive);
  }, [modalActive]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {children}
    </Modal>
  );
}

export default ModalLogin;

import { ReactNode } from "react";
import { Modal } from "antd";

interface ISharedModal {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  submitButton?: {
    label: string;
    type: "submit" | "button";
  };
}

const SharedModal: React.FC<ISharedModal> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title={title}
      open={open}
      onCancel={handleCancel}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default SharedModal;

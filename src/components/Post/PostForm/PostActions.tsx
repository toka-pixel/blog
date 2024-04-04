import { Button, Space } from "antd";
import styled from "styled-components";

type PostFormProps = {
  onSubmit?: React.MouseEventHandler<HTMLElement>;
  onClose: () => void;
  submitButton?: {
    label: string;
    danger?:boolean
  };
};

// Create a styled Space component
const StyledSpace = styled(Space)`
  display: flex;
  justify-content: end;
`;

const PostActions: React.FC<PostFormProps> = ({
  onClose,
  onSubmit,
  submitButton,
}) => {
  return (
    <StyledSpace>
      <Button onClick={onClose}>Cancel</Button>
      <Button type="primary" htmlType="submit" onClick={onSubmit} danger={submitButton?.danger}>
        {submitButton?.label}
      </Button>
    </StyledSpace>
  );
};
export default PostActions;

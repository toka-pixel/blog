import { Button } from "antd";
import { useModal } from "../shared-components/SharedModal/useModal";
import SharedModal from "../shared-components/SharedModal";
import PostForm from "./PostForm/PostForm";
import { PlusCircleOutlined } from "@ant-design/icons";
import { IPost } from "../../interfaces/post.interface";
import useAddPost from "./Hooks/useAddPost";

const NewPost = () => {
  const { isModalOpen, closeModal, openModal } = useModal<"add_Post">();

  const { mutateAsync: addPost } = useAddPost();

  // open modal for adding new Post
  const handleOpenModal = () => {
    openModal("add_Post");
  };

  // submit data of new Post
  const handleSubmit = (values: IPost) => {
    addPost(values).then(() => {
      closeModal();
    });
  };

  return (
    <>
      <Button onClick={handleOpenModal} className="mt-1">
        add new Post <PlusCircleOutlined />
      </Button>
      <SharedModal
        open={isModalOpen("add_Post")}
        onClose={closeModal}
        title="New Post"
        submitButton={{
          label: "string",
          type: "submit",
        }}
      >
        <PostForm onSubmit={handleSubmit} onClose={closeModal}   />
      </SharedModal>
    </>
  );
};

export default NewPost;

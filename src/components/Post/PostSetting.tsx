import { Dropdown, Space, Typography } from "antd";
import { MoreOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import SharedModal from "../shared-components/SharedModal";
import type { MenuProps } from "antd";
import { useModal } from "../shared-components/SharedModal/useModal";
import useEditPost from "./Hooks/useEditPost";
import useDeletePost from "./Hooks/useDeletePost";
import { IPost } from "../../interfaces/post.interface";
import PostForm from "./PostForm/PostForm";
import PostActions from "./PostForm/PostActions";

interface IPostSettingProps {
  post: IPost;
}

const PostSetting: React.FC<IPostSettingProps> = ({ post }) => {
  const { isModalOpen, closeModal, openModal } = useModal<
    "delete_post" | "edit_post"
  >();

  const { mutateAsync: deletePost } = useDeletePost();
  const { mutateAsync: editPost } = useEditPost();

  const handleDeletePost = () => {
    deletePost(post.id).then(() => {
      closeModal();
    });
  };

  const handleUpdatePost = (values: IPost) => {
    editPost({...values,id:post.id}).then(() => {
      closeModal();
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      icon: (
        <Space onClick={() => openModal("edit_post")}>
          <EditOutlined />
          Edit Post
        </Space>
      ),
    },
    {
      key: "2",
      icon: (
        <Space onClick={() => openModal("delete_post")}>
          {" "}
          <DeleteOutlined /> Delete Post
        </Space>
      ),
      danger: true,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft" >
        <MoreOutlined  className="cursor-pointer text-xl"  />
      </Dropdown>

      <SharedModal
        open={isModalOpen("edit_post")}
        onClose={closeModal}
        title="Edit Post"
      >
        <PostForm
          onSubmit={handleUpdatePost}
          onClose={closeModal}
          initialValues={post}
        />
      </SharedModal>

      <SharedModal
        open={isModalOpen("delete_post")}
        onClose={closeModal}
        title="Delete Post"
      >
        <Typography>Are you sure you want to delete the post?</Typography>
        <PostActions
          onClose={closeModal}
          onSubmit={handleDeletePost}
          submitButton={{ label: "Delete", danger: true }}
        />
      </SharedModal>
    </>
  );
};
export default PostSetting;

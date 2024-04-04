import { Form, type FormProps, Input } from "antd";
import { IPost } from "../../../interfaces/post.interface";
import PostActions from "./PostActions";
import useGetAuthorOfPost from "../Hooks/useGetAuthorOfPost";

type PostFormProps = {
  onSubmit: (values: IPost) => void;
  onClose: () => void;
  initialValues?: IPost;
};

const { TextArea } = Input;

const PostForm: React.FC<PostFormProps> = ({
  onSubmit,
  onClose,
  initialValues,
}) => {
  const onFinish: FormProps<IPost>["onFinish"] = (values) => {
    onSubmit(values);
  };

  const { data: authorPosts } = useGetAuthorOfPost(initialValues?.id || "4");

  return (
    <Form
      style={{ maxWidth: 600 }}
      initialValues={{ ...initialValues }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="title"
        rules={[{ required: true, message: "Please input title!" }]}
      >
        <Input placeholder="Title" />
      </Form.Item>

      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input author!" }]}
      >
        <Input placeholder="Author" defaultValue={authorPosts?.name} />
      </Form.Item>

      <Form.Item name="body">
        <TextArea placeholder="Content" rows={5}></TextArea>
      </Form.Item>

      <PostActions onClose={onClose} submitButton={{ label: "Submit" }} />
    </Form>
  );
};
export default PostForm;

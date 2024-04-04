import { useState } from "react";
import { Card, Space, Typography } from "antd";
import { IPost } from "../../interfaces/post.interface";
import PostSetting from "./PostSetting";

interface PostProps {
  post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { body, title } = post;

  const { Text } = Typography;

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Space direction="vertical">
      <Card
        title={title.toUpperCase()}
        extra={<PostSetting post={post} />}
        style={{ width: 300 }}
      >
        <Typography>
          {isReadMore ? body.slice(0, 100) : body}
          <Typography
            onClick={toggleReadMore}
            className="cursor-pointer inline-block text-green-500 ml-1"
          >
            {isReadMore ? "...read more" : "  show less"}
          </Typography>
        </Typography>
        <Text type="secondary" className="mt-1 block" code>
          {new Date().toDateString()}
        </Text>
      </Card>
    </Space>
  );
};
export default Post;

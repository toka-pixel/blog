import { getAuthorOfPost } from './../../../services/author';
import { useQuery } from "react-query";

const useGetAuthorOfPost = (authorId:string) => {
  const result = useQuery(["posts", authorId], () => getAuthorOfPost(authorId), {
    enabled: !!authorId,
    select: (data) => data?.data,
  });

  return result;
};

export default useGetAuthorOfPost;
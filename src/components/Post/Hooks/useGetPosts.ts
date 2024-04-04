import { getPosts } from "../../../services/post";
import { useQuery } from "react-query";

const useGetPosts = () => {
  const result = useQuery(["posts"], () => getPosts(), {
    select: (data: any) => data.data,
  });

  return result;
};

export default useGetPosts;

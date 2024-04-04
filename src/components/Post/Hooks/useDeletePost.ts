import { deletePost} from "../../../services/post";
import { useMutation, useQueryClient } from "react-query";

const useDeletePost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.resetQueries(["posts"]);
    },
  });

  return mutation;
};

export default useDeletePost;
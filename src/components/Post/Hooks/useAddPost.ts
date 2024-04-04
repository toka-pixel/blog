import { addPost} from "../../../services/post";
import { useMutation, useQueryClient } from "react-query";

const useAddPost = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.resetQueries(["posts"]);
    },
  });

  return mutation;
};

export default useAddPost;
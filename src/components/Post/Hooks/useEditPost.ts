import { editPost } from '../../../services/post'
import { useMutation, useQueryClient } from "react-query";

const useEditTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation( editPost,{
    onSuccess: () => {
      queryClient.resetQueries(["posts"]);
    },
  });

  return mutation;
};

export default useEditTask;
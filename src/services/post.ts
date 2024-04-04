
import { IPost } from "../interfaces/post.interface";
import { fetchApi } from "../utils/fetchApi";


const endpoint = "posts";

export const getPosts = () => {
  return fetchApi({
    endpoint: `${endpoint}`,
    options: {
      method: "GET",
    },
  });
};


export const addPost = (data: IPost) => {
  return fetchApi({
    endpoint: `${endpoint}`,
    options: {
      method: "POST",
    },
    data,
    successMessage: 'Add New Post successfully"',
  });
};

export const editPost = (data: IPost) => {
  return fetchApi({
    endpoint: `${endpoint}/${data.id}`,
    options: {
      method: "PUT",
    },
    data,
    successMessage: 'Update Post successfully',
  });
};

export const deletePost = (postId: string) => {
  return fetchApi({
    endpoint: `${endpoint}/${postId}`,
    options: {
      method: "DELETE",
    },
    successMessage: 'Delete Post successfully',
  });
};
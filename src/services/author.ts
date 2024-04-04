import { fetchApi } from "../utils/fetchApi";


const endpoint = "users";

export const getAuthorOfPost = (authorId: string) => {
  return fetchApi({
    endpoint: `${endpoint}/${authorId}`,
    options: {
      method: "GET",
    },
  });
};

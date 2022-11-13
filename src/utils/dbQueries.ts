import { returnServerHttpClient } from "./async-operations";

export const getAllPostsWithUserData = async () => {
  const httpClient = returnServerHttpClient();
  try {
    const posts = await httpClient.get(`posts`);
    if (posts.status === 200) {
      return posts.data.data;
    } else {
      console.log("failed creating post");
    }
  } catch (e) {
    console.log(e);
  }
};

import { useQuery } from "react-query";

import { fetchPosts } from "../lbpHttpClient";

export default function usePosts() {
  return useQuery("posts", fetchPosts());
}

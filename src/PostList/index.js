import { arrayOf, shape, string } from "prop-types";

import usePosts from "../usePosts";

export default function PostList() {
  const { isLoading, error, data: posts } = usePosts();

  if (isLoading) return "Loading…";

  if (error) return "Pas de posts dispo. Bientôt !";

  if (!posts || posts.length === 0) return "Pas de posts dispo.";

  return (
    <ul style={{ border: "1px solid red" }}>
      {posts.map(({ id, title, username }) => (
        <li key={id}>
          {title} - <em>{username}</em>
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: arrayOf(
    shape({
      title: string.isRequired,
      username: string.isRequired,
    })
  ),
};

PostList.defaultProps = {
  posts: [],
};

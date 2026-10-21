import { Link } from "react-router";
import type { Post } from "../types/post"; 
import LikeButton from "./LikeButton";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px 0" }}>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.date}</p>
      <p>{post.excerpt}</p> 
      <LikeButton />
    </div>
  );
}
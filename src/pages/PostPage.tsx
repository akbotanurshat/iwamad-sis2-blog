import { useParams, Link } from "react-router";
import { posts } from "../data/posts";

export default function PostPage() {
  const { id } = useParams();
  
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Post not found (id: {id})</h2>
        <Link to="/posts" style={{ color: "var(--accent-color)" }}>
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <article style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{post.title}</h1>
      <p style={{ color: "var(--text-muted)" }}>{post.date}</p>
      <p style={{ lineHeight: "1.8", marginTop: "20px" }}>{post.content}</p>

      <div style={{ marginTop: "40px", borderTop: "1px solid var(--border-color)", paddingTop: "20px" }}>
        <Link to="/posts" style={{ color: "var(--accent-color)" }}>
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
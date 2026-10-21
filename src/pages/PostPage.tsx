import { useParams, Link } from "react-router";
import { posts } from "../data/posts";
import { useState } from "react";

export default function PostPage() {
  const { id } = useParams();
  const [showComments, setShowComments] = useState(false);

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Post not found (id: {id})</h2>
        <p>The post you are looking for does not exist.</p>
        <Link to="/posts" style={{ color: "blue", textDecoration: "underline" }}>
          Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <article style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{post.title}</h1>
      {post.date && <p style={{ color: "gray" }}>{post.date}</p>}
      <p style={{ lineHeight: "1.6", marginTop: "20px" }}>{post.content}</p>

      <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
        <button 
          onClick={() => setShowComments(!showComments)}
          style={{ padding: "8px 16px", cursor: "pointer" }}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
      </div>

      {showComments && (
        <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f0f0f0", borderRadius: "5px" }}>
          <p>No comments yet. Be the first to comment!</p>
        </div>
      )}

      <div style={{ marginTop: "40px", borderTop: "1px solid #ccc", paddingTop: "20px" }}>
        <Link to="/posts" style={{ color: "blue", textDecoration: "underline" }}>
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
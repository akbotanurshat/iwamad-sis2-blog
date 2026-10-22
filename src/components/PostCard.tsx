import { Link } from "react-router";
import type { Post } from "../types/post";
import LikeButton from "./LikeButton";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article style={{ 
      backgroundColor: "var(--surface-color)", 
      padding: "30px", 
      borderRadius: "12px", 
      border: "1px solid var(--border-color)",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      transition: "transform 0.2s ease, box-shadow 0.2s ease"
    }}>
      <div>
        <span style={{ fontSize: "12px", color: "var(--accent-color)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
          Article
        </span>
        <span style={{ fontSize: "13px", color: "var(--text-muted)", marginLeft: "10px" }}>{post.date}</span>
      </div>
      
      <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3" }}>
        <Link to={`/posts/${post.id}`} style={{ transition: "color 0.2s" }}>
          {post.title}
        </Link>
      </h2>
      
      <p style={{ color: "var(--text-muted)", margin: "0", flexGrow: 1 }}>
        {post.content ? post.content.substring(0, 100) : post.excerpt}...
      </p>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", borderTop: "1px solid var(--border-color)", paddingTop: "20px" }}>
        <Link to={`/posts/${post.id}`} style={{ color: "var(--accent-color)", fontWeight: "600", fontSize: "14px" }}>
          Read more →
        </Link>
        <LikeButton />
      </div>
    </article>
  );
}
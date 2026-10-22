import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function PostsPage() {
  return (
    <div style={{ padding: "60px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>All Posts</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "40px", fontSize: "18px" }}>Thoughts, tutorials, and things I'm learning.</p>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
        gap: "30px" 
      }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
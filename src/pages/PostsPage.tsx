import { posts } from "../data/posts";
import PostCard from "../components/PostCard";

export default function PostsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Posts</h1>
      <p>Here you will see the list of all my articles.</p>
      
      {/* Посттардың тізімін шығаратын жер */}
      <div style={{ marginTop: "20px" }}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
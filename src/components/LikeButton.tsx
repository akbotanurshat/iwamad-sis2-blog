import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button 
      onClick={() => setLiked(!liked)}
      style={{ padding: "5px 10px", cursor: "pointer", marginTop: "10px" }}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}
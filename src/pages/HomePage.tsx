import { Link } from "react-router";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", padding: "120px 20px", maxWidth: "800px", margin: "0 auto" }}>
      <p style={{ color: "var(--accent-color)", textTransform: "uppercase", letterSpacing: "2px", fontSize: "13px", fontWeight: "bold" }}>
        Welcome to my blog
      </p>
      <h1 style={{ fontSize: "56px", lineHeight: "1.1", margin: "20px 0", letterSpacing: "-1px" }}>
        Exploring code, <br/>
        <span style={{ color: "var(--accent-color)" }}>sharing ideas.</span>
      </h1>
      <p style={{ color: "var(--text-muted)", fontSize: "18px", lineHeight: "1.6", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px auto" }}>
        A personal blog about frontend development, TypeScript, React, and the journey of continuous learning.
      </p>
      <Link to="/posts">
        <button style={{ padding: "14px 32px", fontSize: "16px" }}>
          Read the Blog
        </button>
      </Link>
    </div>
  );
}
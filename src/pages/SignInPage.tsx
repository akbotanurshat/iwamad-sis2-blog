import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function SignInPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    signIn();
    navigate("/dashboard"); 
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Sign In</h1>
      <p>Click the button below to sign in.</p>
      <button onClick={handleSignIn} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Sign In
      </button>
    </div>
  );
}
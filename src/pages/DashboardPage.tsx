import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

export default function DashboardPage() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/"); 
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Dashboard</h1>
      <p>Welcome to your private dashboard! Only signed-in users can see this.</p>
      <button onClick={handleSignOut} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Sign Out
      </button>
    </div>
  );
}
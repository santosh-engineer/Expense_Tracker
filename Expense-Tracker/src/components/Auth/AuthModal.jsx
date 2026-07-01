import { useState, useContext } from "react";
import { ExpenseContext } from "../../context/ExpenseContext";

export default function AuthModal({ setUser }) {

  const { setUser: setContextUser } = useContext(ExpenseContext);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("currentUser", email);
    setContextUser(email);
    setUser({ email });
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button className="primary-btn">Continue</button>
        </form>
      </div>
    </div>
  );
}
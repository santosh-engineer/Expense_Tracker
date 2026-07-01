import { useState } from "react";
import Header from "./components/Layout/Header";
import Dashboard from "./components/Layout/Dashboard";
import AuthModal from "./components/Auth/AuthModal";

function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      {!user && <AuthModal setUser={setUser}/>}

      {user && (
        <>
          <Header setUser={setUser}/>
          <Dashboard/>
        </>
      )}
    </>
  );
}

export default App;
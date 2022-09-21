import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import AddVideo from "./pages/AddVideo";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <h1>Youtube</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" /> } />
          <Route path="/addvideo" element={user ? <AddVideo /> : <Navigate to="/login" /> } />
          <Route path="/login" element={!user ? <Login />: <Navigate to="/profile"/> } />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/profile"/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

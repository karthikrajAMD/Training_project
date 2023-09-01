import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Dashboard from "./Component/Dashboard";
import Sidebar from "./Component/Sidebar";
import Profile from "./Component/Profile";
import Dummy from "./Component/Dummy";
function App() {
  return (
    <div className="App">
      <div className="login-signup">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dummy" element={<Dummy />} /> */}
        </Routes>
      </div>
      <div className="head1">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}
    </div>
  );
}

export default App;

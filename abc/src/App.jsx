import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProtectedRouter from "./ProtectedRouter";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<ProtectedRouter />} />
      <Route path="/dash" element={<Dashboard/>}/>
    </Routes>
  );
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import TrendsDownload from "./pages/TrendsDownload";
import PrivateRoutes from "./layouts/PrivateRoutes";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<TrendsDownload />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

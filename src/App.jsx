import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Community from "./Components/Community/Community";
import AiScaner from "./Components/aiScaner/AiScaner";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/AiScaner" element={<AiScaner />} />
          <Route path="/Community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

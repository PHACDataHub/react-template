import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Sample from './Pages/Sample/Sample';
import Home from './Pages/Home/Home.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Layout wraps routes */}
        <Route index element={<Home />} /> {/* Home route */}
        <Route path="sample" element={<Sample />} /> {/* Sample route */}
      </Route>
    </Routes>
  );
}

export default App;
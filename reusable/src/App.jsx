import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Sample from './Pages/Sample Page/Sample';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Sample />} />
          <Route path="Sample" element={<Sample />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
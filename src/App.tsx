// ========== PACKAGES ========== \\
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// ========== PAGES ========== \\
import Landing from "./pages/Landing";
import About from "./pages/About";
import Product from "./pages/Products";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Product />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

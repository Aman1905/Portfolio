import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Community from "./components/Community/Community";
import Blogs from "./components/Blogs/Blog";
import Project from "./components/Projects/Project";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import ErrorPage from "./components/Error/ErrorPage";

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="community" element={<Community />} />
        <Route exact path="blogs" element={<Blogs />} />
        <Route exact path="projects" element={<Project />} />
        <Route exact path="work" element={<Work />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

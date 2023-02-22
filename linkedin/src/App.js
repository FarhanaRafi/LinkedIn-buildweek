import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import "./styles/navBar.css";
import Footer from "./Components/Footer";
import ExperiencePage from "./Components/ExperiencePage";
import NewsFeed from "./Components/NewsFeed";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/experience-page" element={<ExperiencePage />} />
        <Route path="/feed" element={<NewsFeed />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
